import type { Metadata } from 'next'
import './globals.css'
import AuthHeader from './components/auth-header'

export const metadata: Metadata = {
  title: 'EduLearn LMS | Modern Learning Management System',
  description: 'Transform your learning experience with our comprehensive Learning Management System. Access courses, track progress, and achieve your educational goals.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthHeader />
        {children}
      </body>
    </html>
  )
}
