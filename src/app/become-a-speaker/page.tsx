import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'

export const metadata: Metadata = {
  title: 'Become a Speaker - ML@PSU',
  description: 'Share your knowledge and experience with the ML@PSU community. Apply to be a speaker at our events.',
  openGraph: {
    title: 'Become a Speaker - ML@PSU',
    description: 'Share your knowledge and experience with the ML@PSU community. Apply to be a speaker at our events.',
    images: [
      {
        url: '/api/og?title=Become a Speaker&description=Share your knowledge with the ML@PSU community',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Speaker - ML@PSU',
    description: 'Share your knowledge and experience with the ML@PSU community. Apply to be a speaker at our events.',
    images: ['/api/og?title=Become a Speaker&description=Share your knowledge with the ML@PSU community'],
  },
}

export default function BecomeASpeaker() {
  return (
    <div className="min-h-screen bg-cream">
      <MotionDiv
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16 pt-8 text-sm md:text-base"
        >
          <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            home <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            about <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            resources <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            contact <ArrowUpRight className="w-4 h-4" />
          </Link>
        </MotionDiv>

        {/* Content */}
        <MotionDiv variants={fadeIn} className="space-y-12 max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif tracking-tight text-gray-900">Become a Speaker</h1>
          
          <section className="space-y-6">
            <p className="text-gray-800 text-lg leading-relaxed">
              We love hearing from people who are passionate about what they do! If you&apos;re interested in speaking at one of our events,
              just <Link href="/contact" className="text-red-600 hover:text-red-700 inline-flex items-center font-medium border-b border-red-600">
                shoot us an email <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>. We&apos;ll review your proposal and send you a calendar booking link.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              You can choose to speak either in-person or online. We do prefer in-person talks and can provide travel and accommodation
              arrangements at our convenience.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-gray-900">You might be a great fit if you:</h2>
            <ul className="text-gray-800 space-y-4 list-none text-lg">
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Have done something really cool</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Are distinguished in your field</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Have unique experiences to share</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Are a researcher in AI/ML</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Work in academia</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-gray-900">What&apos;s in it for you?</h2>
            <ul className="text-gray-800 space-y-4 list-none text-lg">
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Connect with an engaged audience passionate about technology</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Network with other speakers and industry professionals</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Get your talk recorded and featured on our platform</span>
              </li>
              <li className="flex items-start gap-3 pl-4 border-l-2 border-gray-300">
                <span className="text-red-600 font-medium">→</span>
                <span>Build your personal brand and speaking portfolio</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 pl-4">
              With your consent, we record all talks and make them available on our website and YouTube channel, helping you reach
              an even wider audience.
            </p>
          </section>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}
