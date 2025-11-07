import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact ML@PSU',
  description: 'Get in touch with the ML@PSU team. We\'d love to hear from you!',
  openGraph: {
    title: 'Contact ML@PSU',
    description: 'Get in touch with the ML@PSU team. We\'d love to hear from you!',
    images: [
      {
        url: '/api/og?title=Contact ML@PSU&description=Get in touch with the ML@PSU team',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ML@PSU',
    description: 'Get in touch with the ML@PSU team. We\'d love to hear from you!',
    images: ['/api/og?title=Contact ML@PSU&description=Get in touch with the ML@PSU team'],
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16 pt-8 text-sm md:text-base">
        <Link
          href="/"
          className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
        >
          home <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/about"
          className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
        >
          about <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/articles"
          className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
        >
          articles <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
        >
          contact <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <h1 className="text-5xl font-serif text-gray-900">Contact Us</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            We&apos;d love to hear from you! Whether you have questions about joining the club, want to collaborate, or just want to chat about ML, feel free to reach out.
          </p>
          <div className="space-y-4 pt-4">
            <a
              href="mailto:machinelearningpennstate@gmail.com"
              className="text-red-600 hover:text-red-700 text-xl font-medium inline-flex items-center gap-2 border-b-2 border-red-600 hover:border-red-700 transition-colors pb-1"
            >
              machinelearningpennstate@gmail.com <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 