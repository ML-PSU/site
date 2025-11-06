import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'

export const metadata: Metadata = {
  title: 'About ML@PSU',
  description: 'Learn about ML@PSU and our mission to advance machine learning education and research.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <MotionDiv
        className="max-w-4xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16 pt-8 text-sm md:text-base"
        >
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
        </MotionDiv>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <MotionDiv
            variants={fadeIn}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              <span className="text-red-600">ML@PSU</span> is a community of{' '}
              <span className="text-gray-900">machine learning enthusiasts</span>
            </h1>
          </MotionDiv>

          <div className="space-y-16">
            <MotionDiv
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                We&apos;re on a mission to make machine learning education accessible, engaging, and fun.
                Through <span className="font-medium text-red-600">workshops</span>, <span className="font-medium text-red-600">talks</span>,
                and <span className="font-medium text-red-600">hands-on projects</span>, we help students dive into the
                exciting world of AI.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif text-gray-900">
                What We Do
              </h2>
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                  <span className="text-red-600 font-medium">→</span>
                  <span>Host weekly workshops and tech talks</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                  <span className="text-red-600 font-medium">→</span>
                  <span>Organize hands-on coding sessions</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                  <span className="text-red-600 font-medium">→</span>
                  <span>Connect students with industry experts</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                  <span className="text-red-600 font-medium">→</span>
                  <span>Build cool ML projects together</span>
                </li>
              </ul>
            </MotionDiv>

            <MotionDiv
              variants={fadeIn}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif text-gray-900">
                Join Us
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Whether you&apos;re a <span className="font-medium text-red-600">complete beginner</span> or
                a <span className="font-medium text-red-600">seasoned ML engineer</span>, there&apos;s a place for you here.
                We believe in learning together and helping each other grow.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={fadeIn}
              className="space-y-8 pt-8"
            >
              <h2 className="text-3xl font-serif text-gray-900 text-center">
                Get Involved
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelQdK7kY8PMDSgemp9ksCSRHwji2qg3HgybPZuGuFMFrSVLg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:text-red-600 transition-colors flex items-center justify-center gap-1 font-medium"
                >
                  become a member <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/become-a-speaker"
                  className="text-xl text-gray-900 hover:text-red-600 transition-colors flex items-center justify-center gap-1 font-medium"
                >
                  become a speaker <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}