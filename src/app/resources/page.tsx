import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ML@PSU Resources',
  description: 'A collection of machine learning resources for the ML@PSU community.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base">
        <Link 
          href="/" 
          className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          home <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link 
          href="/about" 
          className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          about <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/articles"
          className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1" 
        >
          articles <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link 
          href="/contact" 
          className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
        >
          contact <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">📜 resources</h1>
        <div className="grid gap-6">
          <a
            href="https://pranav-karra.notion.site/Pranav-Karra-s-ML-Resources-122182bee24580bd8491dfc7a88ad801"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg 
                     hover:shadow-xl transition-all duration-300 ease-in-out
                     hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/Notion-logo.svg.png"
                  alt="Notion Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">ML Resources</h2>
            </div>
            <p className="text-gray-700 mb-4">
              A comprehensive collection of machine learning resources, including research papers,
              courses, tutorials, and tools.
            </p>
            <div className="text-sm text-gray-600 flex items-center justify-between">
              <span>Updated regularly • Curated by Pranav Karra</span>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}