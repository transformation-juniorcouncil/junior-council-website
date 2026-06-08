import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Junior Council | Fighting for Youth with HIV/AIDS in Chicago',
    template: '%s | Junior Council',
  },
  description:
    'Junior Council is a Chicago-based nonprofit dedicated to raising money for adolescents living with HIV and AIDS, in partnership with Ann & Robert H. Lurie Children\'s Hospital of Chicago.',
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
        {/* UserWay Accessibility Widget
            To activate: sign up free at userway.org, get your account ID,
            and replace REPLACE_WITH_YOUR_ACCOUNT_ID below */}
        {/* NOTE: UserWay account configured for Vercel preview URL.
            Once juniorcouncil.org domain is live, update the domain
            in the UserWay dashboard at userway.org to match. */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="Lc427Ysm8T"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
