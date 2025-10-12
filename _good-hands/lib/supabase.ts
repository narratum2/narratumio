// Supabase Client Configuration
// Once you set up Supabase, add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to env

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let supabaseInstance: SupabaseClient | null = null

export const getSupabase = () => {
  if (!supabaseInstance && supabaseUrl && supabaseAnonKey) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
}

// For backward compatibility - but will throw error if not configured
export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop) {
    const client = getSupabase()
    if (!client) {
      throw new Error('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.')
    }
    return (client as any)[prop]
  }
})

// Database Types
export interface Booking {
  id: string
  created_at: string
  customer_name: string
  customer_email: string
  customer_phone: string
  service_type: string
  preferred_date: string
  preferred_time: string
  neighborhood?: string
  message?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  professional_id?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export interface Customer {
  id: string
  created_at: string
  email: string
  name: string
  phone?: string
  membership_tier?: 'gold' | 'platinum' | null
  membership_status?: 'active' | 'cancelled' | 'past_due' | null
  stripe_customer_id?: string
  total_bookings: number
  lifetime_value: number
}

export interface Membership {
  id: string
  created_at: string
  customer_id: string
  tier: 'gold' | 'platinum'
  status: 'active' | 'cancelled' | 'past_due'
  stripe_subscription_id: string
  current_period_start: string
  current_period_end: string
  cancel_at?: string
  monthly_price: number
}

// Helper Functions
export async function createBooking(bookingData: Omit<Booking, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        ...bookingData,
        status: 'pending',
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Error creating booking:', error)
    throw error
  }

  return data
}

export async function getCustomerByEmail(email: string) {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') {
    // PGRST116 is "not found"
    console.error('Error fetching customer:', error)
    throw error
  }

  return data
}

export async function createOrUpdateCustomer(customerData: {
  email: string
  name: string
  phone?: string
}) {
  // Check if customer exists
  const existing = await getCustomerByEmail(customerData.email)

  if (existing) {
    // Update existing customer
    const { data, error } = await supabase
      .from('customers')
      .update({
        name: customerData.name,
        phone: customerData.phone,
      })
      .eq('email', customerData.email)
      .select()
      .single()

    if (error) throw error
    return data
  } else {
    // Create new customer
    const { data, error } = await supabase
      .from('customers')
      .insert([
        {
          ...customerData,
          total_bookings: 0,
          lifetime_value: 0,
        },
      ])
      .select()
      .single()

    if (error) throw error
    return data
  }
}

export async function getMembershipStatus(customerId: string) {
  const { data, error } = await supabase
    .from('memberships')
    .select('*')
    .eq('customer_id', customerId)
    .eq('status', 'active')
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching membership:', error)
    throw error
  }

  return data
}

export async function getBookingsByCustomer(customerEmail: string) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('customer_email', customerEmail)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching bookings:', error)
    throw error
  }

  return data
}

// Real-time subscription helper
export function subscribeToBookings(callback: (booking: Booking) => void) {
  const subscription = supabase
    .channel('bookings_changes')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'bookings',
      },
      (payload) => {
        callback(payload.new as Booking)
      }
    )
    .subscribe()

  return subscription
}

// Database setup SQL (run this in Supabase SQL editor)
export const DATABASE_SETUP_SQL = `
-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  neighborhood TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  professional_id UUID,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  membership_tier TEXT,
  membership_status TEXT,
  stripe_customer_id TEXT,
  total_bookings INTEGER DEFAULT 0,
  lifetime_value NUMERIC DEFAULT 0
);

-- Create memberships table
CREATE TABLE IF NOT EXISTS memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  tier TEXT NOT NULL,
  status TEXT NOT NULL,
  stripe_subscription_id TEXT NOT NULL,
  current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  cancel_at TIMESTAMP WITH TIME ZONE,
  monthly_price NUMERIC NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_memberships_customer ON memberships(customer_id);
CREATE INDEX IF NOT EXISTS idx_memberships_status ON memberships(status);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust based on your auth strategy)
CREATE POLICY "Allow public insert on bookings" ON bookings
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on bookings" ON bookings
  FOR SELECT TO authenticated
  USING (true);
`

