// Membership Management Helper
// Handles membership status checking, discount calculation, and benefits

import { getCustomerMembershipStatus } from './notion'

export type MembershipTier = 'Gold' | 'Platinum' | 'None'

export interface MembershipStatus {
  isMember: boolean
  tier: MembershipTier | null
  discount: number // 0.15 for Gold, 0.25 for Platinum, 0 for None
  benefits: string[]
}

export interface MembershipBenefits {
  Gold: string[]
  Platinum: string[]
}

/**
 * Membership benefits by tier
 */
export const MEMBERSHIP_BENEFITS: MembershipBenefits = {
  Gold: [
    '15% discount on all services',
    'Priority booking access',
    'Free service upgrades when available',
    'Quarterly exclusive beauty experience',
    'Free cancellations (up to 24h notice)',
    'Members-only content and tips',
    'Birthday month special treat',
  ],
  Platinum: [
    '25% discount on all services',
    'VIP priority booking',
    'Complimentary service upgrades',
    'Monthly exclusive beauty experience',
    'Free cancellations (up to 2h notice)',
    'Dedicated concierge line',
    'Annual beauty consultation',
    'Partner hotel spa benefits',
    'Priority professional selection',
    'Exclusive event invitations',
  ],
}

/**
 * Membership pricing
 */
export const MEMBERSHIP_PRICING = {
  Gold: {
    monthly: 49,
    annually: 490, // ~€41/month (16% savings)
  },
  Platinum: {
    monthly: 129,
    annually: 1290, // ~€108/month (16% savings)
  },
}

/**
 * Get membership discount rate
 */
export function getMembershipDiscount(tier: MembershipTier | null): number {
  switch (tier) {
    case 'Gold':
      return 0.15 // 15%
    case 'Platinum':
      return 0.25 // 25%
    default:
      return 0
  }
}

/**
 * Get membership benefits
 */
export function getMembershipBenefits(tier: MembershipTier | null): string[] {
  if (!tier || tier === 'None') {
    return []
  }
  return MEMBERSHIP_BENEFITS[tier] || []
}

/**
 * Check if user has a specific membership tier
 */
export function hasMembership(
  status: MembershipStatus,
  requiredTier?: MembershipTier
): boolean {
  if (!status.isMember) {
    return false
  }

  if (!requiredTier) {
    return true
  }

  if (requiredTier === 'Platinum') {
    return status.tier === 'Platinum'
  }

  if (requiredTier === 'Gold') {
    return status.tier === 'Gold' || status.tier === 'Platinum'
  }

  return false
}

/**
 * Calculate discounted price
 */
export function calculateDiscountedPrice(
  originalPrice: number,
  membershipStatus: MembershipStatus
): {
  original: number
  discount: number
  discountAmount: number
  final: number
  savings: number
} {
  const discountAmount = originalPrice * membershipStatus.discount
  const finalPrice = originalPrice - discountAmount

  return {
    original: originalPrice,
    discount: membershipStatus.discount,
    discountAmount: Math.round(discountAmount * 100) / 100,
    final: Math.round(finalPrice * 100) / 100,
    savings: Math.round(discountAmount * 100) / 100,
  }
}

/**
 * Get membership status by email (from Notion)
 */
export async function checkMembershipStatus(
  email: string
): Promise<MembershipStatus> {
  try {
    const status = await getCustomerMembershipStatus(email)

    return {
      isMember: status.isMember,
      tier: status.tier,
      discount: status.discount,
      benefits: getMembershipBenefits(status.tier),
    }
  } catch (error) {
    console.error('Error checking membership status:', error)
    return {
      isMember: false,
      tier: null,
      discount: 0,
      benefits: [],
    }
  }
}

/**
 * Calculate savings over time for membership
 */
export function calculateMembershipROI(params: {
  averageMonthlySpend: number
  membershipTier: 'Gold' | 'Platinum'
  billingPeriod: 'monthly' | 'annually'
}): {
  membershipCost: number
  averageDiscount: number
  monthlySavings: number
  breakEvenSpend: number
  worthIt: boolean
  annualSavings: number
} {
  const discount = getMembershipDiscount(params.membershipTier)
  const membershipCost =
    params.billingPeriod === 'monthly'
      ? MEMBERSHIP_PRICING[params.membershipTier].monthly
      : MEMBERSHIP_PRICING[params.membershipTier].annually / 12

  const monthlySavings = params.averageMonthlySpend * discount
  const netMonthlySavings = monthlySavings - membershipCost
  const breakEvenSpend = membershipCost / discount

  return {
    membershipCost,
    averageDiscount: discount,
    monthlySavings: Math.round(monthlySavings * 100) / 100,
    breakEvenSpend: Math.round(breakEvenSpend * 100) / 100,
    worthIt: monthlySavings > membershipCost,
    annualSavings: Math.round(netMonthlySavings * 12 * 100) / 100,
  }
}

/**
 * Get recommended membership tier based on usage
 */
export function recommendMembershipTier(params: {
  averageMonthlySpend: number
  bookingsPerMonth: number
}): {
  recommended: MembershipTier
  reason: string
  potentialSavings: number
} {
  const goldROI = calculateMembershipROI({
    averageMonthlySpend: params.averageMonthlySpend,
    membershipTier: 'Gold',
    billingPeriod: 'monthly',
  })

  const platinumROI = calculateMembershipROI({
    averageMonthlySpend: params.averageMonthlySpend,
    membershipTier: 'Platinum',
    billingPeriod: 'monthly',
  })

  // High spenders should get Platinum
  if (params.averageMonthlySpend >= 400) {
    return {
      recommended: 'Platinum',
      reason: `With €${params.averageMonthlySpend}/month spend, Platinum saves you €${Math.abs(platinumROI.annualSavings)}/year!`,
      potentialSavings: platinumROI.annualSavings,
    }
  }

  // Medium-high spenders
  if (params.averageMonthlySpend >= 200) {
    if (platinumROI.worthIt) {
      return {
        recommended: 'Platinum',
        reason: `Platinum offers best value at your spending level (€${params.averageMonthlySpend}/month)`,
        potentialSavings: platinumROI.annualSavings,
      }
    }
    return {
      recommended: 'Gold',
      reason: `Gold membership saves you €${Math.abs(goldROI.annualSavings)}/year`,
      potentialSavings: goldROI.annualSavings,
    }
  }

  // Medium spenders
  if (params.averageMonthlySpend >= 100) {
    if (goldROI.worthIt) {
      return {
        recommended: 'Gold',
        reason: 'Gold membership pays for itself with your current bookings',
        potentialSavings: goldROI.annualSavings,
      }
    }
  }

  // Low spenders
  return {
    recommended: 'None',
    reason: `You'd need to spend €${goldROI.breakEvenSpend}+/month to benefit from Gold membership`,
    potentialSavings: 0,
  }
}

/**
 * Check if customer is eligible for membership benefits
 */
export function checkBenefitEligibility(
  membershipStatus: MembershipStatus,
  benefit: string
): boolean {
  return membershipStatus.benefits.includes(benefit)
}

/**
 * Get membership tier badge/emoji
 */
export function getMembershipBadge(tier: MembershipTier | null): string {
  switch (tier) {
    case 'Platinum':
      return '💎'
    case 'Gold':
      return '🌟'
    default:
      return ''
  }
}

/**
 * Format membership display name
 */
export function formatMembershipName(tier: MembershipTier | null): string {
  if (!tier || tier === 'None') {
    return 'No Membership'
  }
  return `${getMembershipBadge(tier)} ${tier} Member`
}

/**
 * Get cancellation policy based on membership tier
 */
export function getCancellationPolicy(tier: MembershipTier | null): {
  freeUntil: string
  policy: string
} {
  switch (tier) {
    case 'Platinum':
      return {
        freeUntil: '2 hours before',
        policy: 'Free cancellation up to 2 hours before your appointment',
      }
    case 'Gold':
      return {
        freeUntil: '24 hours before',
        policy: 'Free cancellation up to 24 hours before your appointment',
      }
    default:
      return {
        freeUntil: '48 hours before',
        policy: 'Free cancellation up to 48 hours before your appointment',
      }
  }
}

/**
 * Middleware helper to check membership and apply discount
 */
export async function applyMembershipDiscount(
  email: string,
  originalPrice: number
): Promise<{
  membershipStatus: MembershipStatus
  pricing: ReturnType<typeof calculateDiscountedPrice>
}> {
  const membershipStatus = await checkMembershipStatus(email)
  const pricing = calculateDiscountedPrice(originalPrice, membershipStatus)

  return {
    membershipStatus,
    pricing,
  }
}

/**
 * Get membership upsell message
 */
export function getMembershipUpsellMessage(params: {
  currentTier: MembershipTier | null
  bookingPrice: number
}): string | null {
  if (params.currentTier === 'Platinum') {
    return null // Already highest tier
  }

  if (params.currentTier === 'Gold') {
    const platinumSavings = params.bookingPrice * 0.25
    const goldSavings = params.bookingPrice * 0.15
    const additionalSavings = platinumSavings - goldSavings

    return `Upgrade to Platinum and save €${additionalSavings.toFixed(2)} more on this booking!`
  }

  // No membership
  const goldSavings = params.bookingPrice * 0.15
  const goldMonthly = MEMBERSHIP_PRICING.Gold.monthly

  if (goldSavings > goldMonthly / 2) {
    return `Join Gold membership (€${goldMonthly}/mo) and save €${goldSavings.toFixed(2)} on this booking alone!`
  }

  return null
}

