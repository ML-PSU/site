import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
