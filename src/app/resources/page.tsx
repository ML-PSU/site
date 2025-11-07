import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ML@PSU Resources',
  description: 'A collection of machine learning resources for the ML@PSU community.',
  openGraph: {
    title: 'ML@PSU Resources',
    description: 'A collection of machine learning resources for the ML@PSU community.',
    images: [
      {
        url: '/api/og?title=ML@PSU Resources&description=A collection of machine learning resources',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML@PSU Resources',
    description: 'A collection of machine learning resources for the ML@PSU community.',
    images: ['/api/og?title=ML@PSU Resources&description=A collection of machine learning resources'],
  },
}

export default function ResourcesPage() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-serif mb-12">Resources</h1>
        <div className="grid gap-8">
          <a
            href="https://pranav-karra.notion.site/Pranav-Karra-s-ML-Resources-122182bee24580bd8491dfc7a88ad801"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 bg-white rounded-lg border border-gray-200
                     hover:border-red-600 transition-all duration-300 ease-in-out
                     hover:shadow-lg cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/Notion-logo.svg.png"
                  alt="Notion Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-serif text-gray-900 group-hover:text-red-600 transition-colors">ML Resources</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed ml-14">
              A comprehensive collection of machine learning resources, including research papers,
              courses, tutorials, and tools.
            </p>
            <div className="text-sm text-gray-600 flex items-center justify-between ml-14">
              <span>Updated regularly • Curated by Pranav Karra</span>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}