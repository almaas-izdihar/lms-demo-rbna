'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      setShowOtpInput(true)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      })

      if (error) throw error

      router.push('/')
      router.refresh()
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account using email OTP
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={showOtpInput ? handleVerifyOtp : handleSendOtp}>
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={showOtpInput || loading}
                required
              />
            </div>

            {showOtpInput && (
              <div>
                <Input
                  type="text"
                  placeholder="Enter OTP code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? 'Loading...'
                : showOtpInput
                ? 'Verify OTP'
                : 'Send OTP'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}