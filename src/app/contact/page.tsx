import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'


export const metadata: Metadata = {
  title: 'Contact ML@PSU',
  description: 'Get in touch with the ML@PSU team. Reach out via email or Discord for questions, collaborations, or to join the community.',
  openGraph: {
    title: 'Contact ML@PSU',
    description: 'Get in touch with the ML@PSU team via email or Discord',
    images: [
      {
        url: '/api/og?title=Contact ML@PSU&description=Get in touch with the ML@PSU team via email or Discord',
        width: 1200,
        height: 630,
        alt: 'Contact ML@PSU'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ML@PSU',
    description: 'Get in touch with the ML@PSU team. Reach out via email or Discord for questions, collaborations, or to join the community.',
    images: ['/api/og?title=Contact ML@PSU&description=Get in touch with the ML@PSU team via email or Discord'],
  }
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white relative pb-16">
      <MotionDiv
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold font-mono text-gray-900">Contact Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;d love to hear from you! Whether you have questions about joining the club, want to collaborate, or just want to chat about ML, feel free to reach out.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in touch</h3>
              <div className="space-y-3">
                <a
                  href="mailto:machinelearningpennstate@gmail.com"
                  className="block text-gray-900 underline hover:text-gray-600 transition-colors text-lg font-medium underline-offset-4"
                >
                  machinelearningpennstate@gmail.com
                </a>
                <a
                  href="https://discord.gg/4BUhteYYgT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-900 underline hover:text-[#5865F2] transition-colors text-lg font-medium underline-offset-4"
                >
                  DM us on Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
} 