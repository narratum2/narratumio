/**
 * Single source of truth for Good Hands pricing.
 * Individual service prices are not displayed publicly — pricing is on request.
 * Only membership and premium package pricing is shown.
 */

export type ServiceCategory = 'hair' | 'nails' | 'skincare' | 'makeup' | 'wellness'

/** Display string for individual services — always "Pricing on request" */
export const getBasePriceDisplay = (_category: ServiceCategory): string =>
  'Pricing on request'

/** Full pricing sentence for FAQ */
export const FULL_PRICING_SENTENCE = 'Pricing depends on the service and professional. We provide a personalized quote after understanding your needs — no surprises, no hidden fees. Concierge service is always included.'

/** Neighborhood price display */
export const getNeighborhoodPrice = (
  _neighborhood: string,
  _category: ServiceCategory
): string => 'Pricing on request'

/** Membership tier pricing (monthly) — these are fixed Stripe products */
export const MEMBERSHIP_PRICES = {
  gold: 49,
  platinum: 99,
} as const
