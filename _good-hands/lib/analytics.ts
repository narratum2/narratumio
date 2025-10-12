// Analytics utilities for tracking AI discovery and SEO performance
// Integrates with PostHog, Google Analytics, and custom tracking

export interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  timestamp?: Date
}

export interface AIDiscoveryEvent {
  source: 'chatgpt' | 'claude' | 'perplexity' | 'gemini' | 'other'
  query?: string
  page?: string
  userAgent?: string
}

// PostHog integration
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(event, properties)
  }
  
  // Also send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, properties)
  }
}

// Track AI agent visits
export const trackAIDiscovery = (data: AIDiscoveryEvent) => {
  trackEvent('ai_discovery', {
    source: data.source,
    query: data.query,
    page: data.page || window.location.pathname,
    userAgent: data.userAgent || navigator.userAgent,
    timestamp: new Date().toISOString(),
  })
}

// Detect if visitor is likely an AI agent
export const detectAIAgent = (): string | null => {
  if (typeof window === 'undefined') return null
  
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Known AI bot user agents
  const aiAgents: Record<string, string> = {
    'gptbot': 'chatgpt',
    'chatgpt-user': 'chatgpt',
    'claude-web': 'claude',
    'anthropic-ai': 'claude',
    'perplexitybot': 'perplexity',
    'cohere-ai': 'cohere',
    'google-extended': 'gemini',
    'ccbot': 'common-crawl',
  }
  
  for (const [botName, source] of Object.entries(aiAgents)) {
    if (userAgent.includes(botName)) {
      return source
    }
  }
  
  return null
}

// Track page views with AI detection
export const trackPageView = (page?: string) => {
  const aiAgent = detectAIAgent()
  
  if (aiAgent) {
    trackAIDiscovery({
      source: aiAgent as AIDiscoveryEvent['source'],
      page: page || window.location.pathname,
    })
  }
  
  trackEvent('page_view', {
    page: page || window.location.pathname,
    isAIAgent: !!aiAgent,
    aiSource: aiAgent,
  })
}

// Track booking submissions
export const trackBooking = (service: string, source?: string) => {
  trackEvent('booking_submitted', {
    service,
    source: source || 'website',
    page: window.location.pathname,
  })
}

// Track search queries
export const trackSearch = (query: string, category?: string) => {
  trackEvent('search', {
    query,
    category,
    page: window.location.pathname,
  })
}

// Track API endpoint calls (for AI agent analytics)
export const trackAPICall = (endpoint: string, params?: Record<string, any>) => {
  trackEvent('api_call', {
    endpoint,
    params,
    timestamp: new Date().toISOString(),
  })
}

// SEO performance tracking
export interface SEOMetrics {
  pageLoadTime: number
  timeToInteractive: number
  firstContentfulPaint: number
  largestContentfulPaint: number
}

export const trackSEOMetrics = () => {
  if (typeof window === 'undefined') return
  
  // Use Performance API
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        trackEvent('seo_metrics', {
          pageLoadTime: perfData.loadEventEnd - perfData.fetchStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
          timeToInteractive: perfData.domInteractive - perfData.fetchStart,
        })
        
        // Track Core Web Vitals if available
        if ('PerformanceObserver' in window) {
          // LCP
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              trackEvent('lcp', { value: entry.startTime })
            }
          }).observe({ entryTypes: ['largest-contentful-paint'] })
          
          // FID
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              trackEvent('fid', { value: (entry as any).processingStart - entry.startTime })
            }
          }).observe({ entryTypes: ['first-input'] })
        }
      }, 0)
    })
  }
}

// Initialize analytics on page load
export const initAnalytics = () => {
  if (typeof window === 'undefined') return
  
  // Track initial page view
  trackPageView()
  
  // Track SEO metrics
  trackSEOMetrics()
  
  // Track AI agent detection
  const aiAgent = detectAIAgent()
  if (aiAgent) {
    console.log(`🤖 AI Agent detected: ${aiAgent}`)
    trackAIDiscovery({ source: aiAgent as AIDiscoveryEvent['source'] })
  }
}

// Export for use in components
export default {
  trackEvent,
  trackPageView,
  trackBooking,
  trackSearch,
  trackAPICall,
  trackAIDiscovery,
  detectAIAgent,
  trackSEOMetrics,
  initAnalytics,
}

