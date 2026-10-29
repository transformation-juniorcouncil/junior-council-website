import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Junior Council | Supporting Lurie Children\'s SID Clinic',
  description:
    'Chicago professionals raising money for adolescents living with HIV and AIDS through the Special Infectious Diseases Clinic at Lurie Children\'s Hospital.',
  keywords: [
    'Junior Council',
    'HIV AIDS youth',
    'Chicago nonprofit',
    'Lurie Children\'s Hospital',
    'adolescent HIV',
    'donate Chicago',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Junior Council',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  )
}
