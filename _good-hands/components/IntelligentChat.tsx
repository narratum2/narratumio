'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  expert?: string // Which AI expert is responding
}

interface ChatWidgetProps {
  position?: 'bottom-right' | 'bottom-left'
  primaryColor?: string
}

export default function IntelligentChat({ 
  position = 'bottom-right',
  primaryColor = '#8B7355' 
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentExpert, setCurrentExpert] = useState('Beatriz') // Default: Customer Success
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: '1',
          role: 'assistant',
          content: "Hello! I'm Beatriz, your personal beauty concierge. I'm here to help you discover the perfect beauty experience in Lisbon. Whether you're looking for a specific service, exploring neighborhoods, or planning a special occasion, I can guide you. What brings you to Good Hands today?",
          timestamp: new Date(),
          expert: 'Beatriz'
        }])
      }, 500)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Send to AI backend
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputValue,
          conversationHistory: messages,
          currentExpert
        })
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        expert: data.expert || currentExpert
      }

      // Update current expert if handoff occurred
      if (data.expert && data.expert !== currentExpert) {
        setCurrentExpert(data.expert)
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to email us at concierge@goodhands.com.",
        timestamp: new Date(),
        expert: currentExpert
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    { label: '📅 Book a Service', action: 'book' },
    { label: '🏨 Hotel Partnerships', action: 'hotels' },
    { label: '🗺️ Neighborhood Guides', action: 'neighborhoods' },
    { label: '💎 Premium Services', action: 'premium' },
  ]

  const handleQuickAction = (action: string) => {
    const actionMessages: { [key: string]: string } = {
      book: "I'd like to book a beauty service",
      hotels: "I'm interested in hotel partnerships",
      neighborhoods: "Tell me about the best neighborhoods for beauty services",
      premium: "What premium services do you offer?"
    }
    setInputValue(actionMessages[action])
  }

  const positionClasses = position === 'bottom-right' 
    ? 'right-6 bottom-6' 
    : 'left-6 bottom-6'

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sand to-gold p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                  👋
                </div>
                <div>
                  <h3 className="font-semibold text-white">Good Hands Concierge</h3>
                  <p className="text-xs text-white/90">
                    {currentExpert} • {getCurrentExpertRole(currentExpert)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-sand text-white'
                        : 'bg-white text-ink border border-gray-200'
                    }`}
                  >
                    {message.role === 'assistant' && message.expert && (
                      <div className="text-xs text-gold font-semibold mb-1">
                        {message.expert}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <div className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-white/70' : 'text-harbor'
                    }`}>
                      {message.timestamp.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-ink border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 bg-white border-t border-gray-200">
                <p className="text-xs text-harbor mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((qa) => (
                    <button
                      key={qa.action}
                      onClick={() => handleQuickAction(qa.action)}
                      className="text-xs px-3 py-1.5 bg-porcelain text-ink rounded-full hover:bg-sand hover:text-white transition-colors"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-sand text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-harbor mt-2 text-center">
                Powered by AI • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-sand to-gold text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen ? (
          <>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
              !
            </span>
          </>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </motion.button>
    </div>
  )
}

function getCurrentExpertRole(expert: string): string {
  const roles: { [key: string]: string } = {
    'Beatriz': 'Customer Success',
    'Miguel': 'Partnership Director',
    'Isabella': 'Travel Advisor',
    'Clara': 'Business Strategist',
    'Sofia': 'Style Consultant'
  }
  return roles[expert] || 'Concierge'
}

