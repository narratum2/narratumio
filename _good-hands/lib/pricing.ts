/**
 * Single source of truth for Good Hands pricing.
 * All pages and components should reference these values.
 */

export const BASE_PRICES = {
  hair: 105,
  nails: 65,
  skincare: 95,
  makeup: 85,
  wellness: 80,
} as const

export type ServiceCategory = keyof typeof BASE_PRICES

/** Base price strings for display (e.g. "From €105") */
export const getBasePriceDisplay = (category: ServiceCategory): string =>
  `From €${BASE_PRICES[category]}`

/** All base prices for FAQ and other copy */
export const PRICING_DISPLAY = {
  hair: `Hair starts at €${BASE_PRICES.hair}`,
  nails: `Nails at €${BASE_PRICES.nails}`,
  skincare: `Skincare at €${BASE_PRICES.skincare}`,
  makeup: `Makeup at €${BASE_PRICES.makeup}`,
  wellness: `Wellness at €${BASE_PRICES.wellness}`,
} as const

/** Full pricing sentence for FAQ "How much does it cost?" */
export const FULL_PRICING_SENTENCE = `${PRICING_DISPLAY.hair}. ${PRICING_DISPLAY.nails}. ${PRICING_DISPLAY.skincare}. ${PRICING_DISPLAY.makeup}. ${PRICING_DISPLAY.wellness}. That includes the service and our concierge fee. No hidden costs.`

/** Neighborhood-specific pricing (some areas differ from base) */
export const NEIGHBORHOOD_PRICES: Record<string, Partial<Record<ServiceCategory, number>>> = {
  chiado: { hair: 95, nails: 50, skincare: 110, makeup: 85 },
}

/** Membership tier pricing (monthly) */
export const MEMBERSHIP_PRICES = {
  gold: 49,
  platinum: 99,
} as const

export const getNeighborhoodPrice = (
  neighborhood: string,
  category: ServiceCategory
): string => {
  const overrides = NEIGHBORHOOD_PRICES[neighborhood]
  const price = overrides?.[category] ?? BASE_PRICES[category]
  return `From €${price}`
}
