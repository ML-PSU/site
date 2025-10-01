import type { Metadata } from 'next'
import { PT_Serif, Funnel_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ptSerif = PT_Serif({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const funnelDisplay = Funnel_Display({ 
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-funnel-display',
})

export const metadata: Metadata = {
  title: 'ML@PSU',
  description: 'Machine Learning Club at Penn State University',
  metadataBase: new URL('https://mlpsu.org'),
  openGraph: {
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    url: 'https://mlpsu.org',
    siteName: 'ML@PSU',
    images: [
      {
        url: '/api/og?title=ML@PSU&description=Machine Learning Club at Penn State University',
        width: 1200,
        height: 630,
        alt: 'ML@PSU - Machine Learning Club at Penn State University'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    images: ['/api/og?title=ML@PSU&description=Machine Learning Club at Penn State University'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ptSerif.className} ${funnelDisplay.variable}`}>
        <Navbar />
        <main className="pt-28">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
