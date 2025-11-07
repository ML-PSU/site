import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ML@PSU Articles',
  description: 'Articles and writings about machine learning, AI, and technology.',
  openGraph: {
    title: 'ML@PSU Articles',
    description: 'Articles and writings about machine learning, AI, and technology.',
    images: [
      {
        url: '/api/og?title=ML@PSU Articles&description=Articles and writings about machine learning, AI, and technology',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML@PSU Articles',
    description: 'Articles and writings about machine learning, AI, and technology.',
    images: ['/api/og?title=ML@PSU Articles&description=Articles and writings about machine learning, AI, and technology'],
  },
}

interface Article {
  title: string
  url: string
  description: string
  date: string
  author: {
    name: string
    avatar?: string
    role?: string
  }
}

// Function to determine the platform from URL
function getPlatformInfo(url: string): { name: string; logo: string } {
  if (url.includes('notion.so')) {
    return {
      name: 'Notion',
      logo: '/Notion-logo.svg.png'
    }
  }
  if (url.includes('medium.com')) {
    return {
      name: 'Medium',
      logo: '/medium-round-icon.webp'
    }
  }
  if (url.includes('linkedin.com')) {
    return {
      name: 'LinkedIn',
      logo: '/linkedin-icon.png'
    }
  }
  if (url.includes('twitter.com')) {
    return {
      name: 'X (Twitter)',
      logo: '/x-icon.png'
    }
  }
  // Default case
  return {
    name: 'Article',
    logo: '/article-icon.png'
  }
}

// Add your articles here
const articles: Article[] = [
  {
    title: "what you need to know about anthropic’s model context protocol (MCP)",
    url: "https://medium.com/@pranavkarra001/what-you-need-to-know-about-anthropics-model-context-protocol-mcp-4200d17911d7",
    description: "anthropic has open-sourced a protocol that lets AI models interact with your computer and apps.",
    date: "2024-01-15",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU Vice President",
      avatar: "/Pranav_Karra_Professional_Headshot.webp"
    }
  },
  {
    title: "my guide to get shit done in machine learning.",
    url: "https://medium.com/@pranavkarra001/my-guide-to-get-shit-done-in-machine-learning-f96b1cf9080b",
    description: "yall are probably thinking whos this guy and why did he write a guide and why should i follow it? dont follow it, idc honestly.",
    date: "2024-01-10",
    author: {
      name: "Pranav Karra",
      role: "ML@PSU President",
      avatar: "/Pranav_Karra_Professional_Headshot.webp"
    }
  }
]

export default function ArticlesPage() {
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
        <h1 className="text-5xl font-serif mb-12">Articles</h1>
        <div className="grid gap-8">
          {articles.map((article) => {
            const platform = getPlatformInfo(article.url)
            return (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-white rounded-lg border border-gray-200
                         hover:border-red-600 transition-all duration-300 ease-in-out
                         hover:shadow-lg cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-serif text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                    {article.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6 ml-14 text-lg leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between ml-14">
                  <div className="flex items-center gap-3">
                    {article.author.avatar && (
                      <div className="relative w-8 h-8">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{article.author.name}</span>
                      {article.author.role && (
                        <span className="text-gray-500">
                          {' • '}{article.author.role}
                        </span>
                      )}
                      <div className="text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                        {' • '}
                        {platform.name}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
} 