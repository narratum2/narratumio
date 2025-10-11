'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/auth'

export default function DiagnosticPage() {
  const [status, setStatus] = useState<any>({})

  useEffect(() => {
    const checkSystem = async () => {
      const checks: any = {
        timestamp: new Date().toISOString(),
        environment: {
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT SET',
          supabaseKeySet: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
        },
        supabase: {
          clientInitialized: !!supabase,
          canConnect: false,
          error: null,
        },
        build: {
          nextVersion: '14.0.4',
          nodeEnv: process.env.NODE_ENV,
        }
      }

      // Test Supabase connection
      try {
        const { data, error } = await supabase.auth.getSession()
        checks.supabase.canConnect = !error
        checks.supabase.error = error?.message || null
        checks.supabase.sessionExists = !!data.session
      } catch (err: any) {
        checks.supabase.error = err.message
      }

      setStatus(checks)
    }

    checkSystem()
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-20 bg-shell">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-semibold text-ink mb-8">
            🔍 System Diagnostics
          </h1>

          <div className="space-y-6">
            {/* Environment Variables */}
            <div className="bg-porcelain rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">
                Environment Variables
              </h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>NEXT_PUBLIC_SUPABASE_URL:</span>
                  <span className={status.environment?.supabaseUrl === 'NOT SET' ? 'text-coral' : 'text-sage'}>
                    {status.environment?.supabaseUrl}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>NEXT_PUBLIC_SUPABASE_ANON_KEY:</span>
                  <span className={!status.environment?.supabaseKeySet ? 'text-coral' : 'text-sage'}>
                    {status.environment?.supabaseKeySet ? 'SET ✓' : 'NOT SET ✗'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>NEXT_PUBLIC_SITE_URL:</span>
                  <span className={status.environment?.siteUrl === 'NOT SET' ? 'text-coral' : 'text-sage'}>
                    {status.environment?.siteUrl}
                  </span>
                </div>
              </div>
            </div>

            {/* Supabase Connection */}
            <div className="bg-porcelain rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">
                Supabase Connection
              </h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>Client Initialized:</span>
                  <span className={status.supabase?.clientInitialized ? 'text-sage' : 'text-coral'}>
                    {status.supabase?.clientInitialized ? 'YES ✓' : 'NO ✗'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Can Connect:</span>
                  <span className={status.supabase?.canConnect ? 'text-sage' : 'text-coral'}>
                    {status.supabase?.canConnect ? 'YES ✓' : 'NO ✗'}
                  </span>
                </div>
                {status.supabase?.error && (
                  <div className="mt-4 p-4 bg-coral/10 border border-coral rounded">
                    <p className="text-sm text-ink">
                      <strong>Error:</strong> {status.supabase.error}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Build Info */}
            <div className="bg-porcelain rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">
                Build Information
              </h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>Next.js Version:</span>
                  <span className="text-sage">{status.build?.nextVersion}</span>
                </div>
                <div className="flex justify-between">
                  <span>Environment:</span>
                  <span className="text-sage">{status.build?.nodeEnv}</span>
                </div>
                <div className="flex justify-between">
                  <span>Timestamp:</span>
                  <span className="text-harbor">{status.timestamp}</span>
                </div>
              </div>
            </div>

            {/* Raw Data */}
            <div className="bg-porcelain rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">
                Raw Diagnostic Data
              </h2>
              <pre className="bg-ink/5 p-4 rounded text-xs overflow-auto max-h-96">
                {JSON.stringify(status, null, 2)}
              </pre>
            </div>

            {/* Actions */}
            <div className="bg-porcelain rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <a
                  href="/"
                  className="block btn-primary text-center"
                >
                  Go to Homepage
                </a>
                <a
                  href="/login"
                  className="block btn-secondary text-center"
                >
                  Go to Login
                </a>
                <a
                  href="/settings"
                  className="block btn-secondary text-center"
                >
                  Go to Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
