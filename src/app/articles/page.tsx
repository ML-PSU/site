import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'

const scrollingText = [
  "Do machines dream?",
  "Can machines be creative?",
  "Do AIs experience time?",
  "What's in the black box?",
  "What do LLMs think about?",
  "Can AI understand poetry?",
  "Do models have souls?",
  "Is consciousness computable?",
  "Can AI feel love?",
  "What are machine dreams made of?",
  "Do neural nets have memories?",
  "Are they conscious?",
  "Can AI feel emotions?",
  "Do neural networks hallucinate?"
]

export const metadata: Metadata = {
  title: 'ML@PSU Articles',
  description: 'Articles and writings about machine learning, AI, and technology.',
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
    title: "what you need to know about anthropic's model context protocol (MCP)",
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
    <div className="min-h-screen bg-white relative pb-16">
      {/* Scrolling Text Bar */}
      <MotionDiv 
        className="scrolling-container"
        variants={fadeIn}
      >
        <div className="scrolling-text text-sm font-pixel">
          {scrollingText.map((text, index) => (
            <span key={index} className="hover-glow mx-8">
              {text}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* Add a spacer div to account for the fixed scrolling bar */}
      <div className="h-24" />

      <MotionDiv
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-sm md:text-base">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            home <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link 
            href="/about" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link
            href="/articles"
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1" 
          >
            articles <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            contact <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">✍️ articles</h1>
          <div className="grid gap-6">
            {articles.map((article) => {
              const platform = getPlatformInfo(article.url)
              return (
                <a
                  key={article.title}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg 
                           hover:shadow-xl transition-all duration-300 ease-in-out
                           hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-8 h-8">
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">{article.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {article.author.avatar && (
                        <div className="relative w-6 h-6">
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
                        <div>
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
                    <ArrowUpRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </MotionDiv>
    </div>
  )
} 