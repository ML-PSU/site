import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'
import Image from 'next/image'

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
  title: 'About ML@PSU',
  description: 'Learn about ML@PSU and our mission to advance machine learning education and research.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative pb-16">
      {/* Scrolling Text Bar */}
      <MotionDiv 
        className="scrolling-container mb-32"
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

      <MotionDiv
        className="max-w-4xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base"
        >
          <Link 
            href="/" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            home <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link 
            href="/resources" 
            className="text-gray-800 hover:text-[#FA8072] transition-colors flex items-center gap-1"
          >
            resources <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
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
        </MotionDiv>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <MotionDiv 
            variants={fadeIn}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold font-mono text-gray-900">
              <span className="text-[#FA8072]">ML@PSU</span> is a community of
              <span className="bg-gradient-to-r from-[#FA8072] to-[#FFB6C1] text-transparent bg-clip-text"> machine learning enthusiasts</span>
            </h1>
          </MotionDiv>

          <div className="space-y-12 font-mono text-gray-700">
            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#FA8072]">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                We&apos;re on a mission to make machine learning education accessible, engaging, and fun. 
                Through <span className="text-[#FA8072]">workshops</span>, <span className="text-[#FA8072]">talks</span>, 
                and <span className="text-[#FA8072]">hands-on projects</span>, we help students dive into the 
                exciting world of AI.
              </p>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#FA8072]">
                What We Do
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072]">→</span>
                  Host weekly workshops and tech talks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072]">→</span>
                  Organize hands-on coding sessions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072]">→</span>
                  Connect students with industry experts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072]">→</span>
                  Build cool ML projects together
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#FA8072]">
                Join Us
              </h2>
              <p className="text-lg leading-relaxed">
                Whether you&apos;re a <span className="text-[#FA8072]">complete beginner</span> or 
                a <span className="text-[#FA8072]">seasoned ML engineer</span>, there&apos;s a place for you here. 
                We believe in learning together and helping each other grow.
              </p>
            </MotionDiv>

            <MotionDiv 
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#FA8072] text-center">
                Get Involved
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelQdK7kY8PMDSgemp9ksCSRHwji2qg3HgybPZuGuFMFrSVLg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#FA8072] transition-colors flex items-center justify-center gap-1 hover:shadow-[0_0_15px_rgba(250,128,114,0.5)]"
                >
                  become a member <ArrowUpRight className="w-5 h-5 text-[#FA8072]" />
                </Link>
                <Link
                  href="/become-a-speaker"
                  className="text-xl hover:text-[#FA8072] transition-colors flex items-center justify-center gap-1 hover:shadow-[0_0_15px_rgba(250,128,114,0.5)]"
                >
                  become a speaker <ArrowUpRight className="w-5 h-5 text-[#FA8072]" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>

      {/* Footer */}
      <div className="w-full bg-gray-100 text-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="font-bold mb-4">MORE LINKS</h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-[#FA8072] transition-colors">
                  Back to Top ↗
                </Link>
                <Link href="/" className="block hover:text-[#FA8072] transition-colors">
                  Home ↗
                </Link>
                <Link href="/resources" className="block hover:text-[#FA8072] transition-colors">
                  Resources ↗
                </Link>
                <Link href="/contact" className="block hover:text-[#FA8072] transition-colors">
                  Contact ↗
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">NEWSLETTER</h3>
              <div>
                <Link 
                  href="https://lu.ma/mlpsu"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Subscribe to Events
                </Link>
              </div>
            </div>
          </div>

          {/* Footer text image */}
          <div className="w-full px-8 md:px-16">
            <Image
              src="/Footer Text.png"
              alt="Footer Text"
              width={1920}
              height={200}
              className="w-full object-contain max-w-[2400px] mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}