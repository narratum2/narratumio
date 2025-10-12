/**
 * Production-safe logging utility
 * Only logs in development, silences in production unless critical
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

const isDevelopment = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'

/**
 * Formats log messages with timestamp and context
 */
function formatMessage(level: LogLevel, message: string, data?: any): string {
  const timestamp = new Date().toISOString()
  const context = isServer ? '[Server]' : '[Client]'
  const prefix = `${timestamp} ${context} [${level.toUpperCase()}]`
  
  if (data !== undefined) {
    return `${prefix} ${message}`
  }
  return `${prefix} ${message}`
}

/**
 * Debug level - only in development
 */
export function debug(message: string, data?: any) {
  if (isDevelopment) {
    console.log(formatMessage('debug', message, data), data !== undefined ? data : '')
  }
}

/**
 * Info level - only in development
 */
export function info(message: string, data?: any) {
  if (isDevelopment) {
    console.info(formatMessage('info', message, data), data !== undefined ? data : '')
  }
}

/**
 * Warning level - always logs but formatted
 */
export function warn(message: string, data?: any) {
  console.warn(formatMessage('warn', message, data), data !== undefined ? data : '')
}

/**
 * Error level - always logs
 * In production, should be sent to error tracking service (e.g., Sentry)
 */
export function error(message: string, error?: any) {
  console.error(formatMessage('error', message, error), error !== undefined ? error : '')
  
  // TODO: In production, send to error tracking service
  // if (!isDevelopment) {
  //   sendToSentry(message, error)
  // }
}

/**
 * API request logger - only in development
 */
export function apiRequest(method: string, path: string, data?: any) {
  if (isDevelopment) {
    console.log(
      formatMessage('info', `API ${method} ${path}`, data),
      data !== undefined ? data : ''
    )
  }
}

/**
 * API response logger - only in development
 */
export function apiResponse(method: string, path: string, status: number, data?: any) {
  if (isDevelopment) {
    const level = status >= 400 ? 'error' : 'info'
    console.log(
      formatMessage(level, `API ${method} ${path} → ${status}`, data),
      data !== undefined ? data : ''
    )
  }
}

/**
 * Export default logger object
 */
export const logger = {
  debug,
  info,
  warn,
  error,
  apiRequest,
  apiResponse,
}

export default logger
