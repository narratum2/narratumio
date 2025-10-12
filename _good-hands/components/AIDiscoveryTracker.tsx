'use client'

import { useEffect } from 'react'
import { initAnalytics, detectAIAgent } from '@/lib/analytics'

export default function AIDiscoveryTracker() {
  useEffect(() => {
    // Initialize analytics on mount
    initAnalytics()
    
    // Log AI agent detection for debugging
    const aiAgent = detectAIAgent()
    if (aiAgent) {
      console.log(`🤖 Good Hands: AI Agent detected - ${aiAgent}`)
    }
  }, [])

  return null // This component doesn't render anything
}

