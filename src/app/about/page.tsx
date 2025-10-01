import { Metadata } from 'next'
import Link from 'next/link'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'About ML@PSU',
  description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
  openGraph: {
    title: 'About ML@PSU',
    description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
    images: [
      {
        url: '/api/og?title=About ML@PSU&description=Our mission to advance machine learning education and research at Penn State',
        width: 1200,
        height: 630,
        alt: 'About ML@PSU'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ML@PSU',
    description: 'Learn about ML@PSU and our mission to advance machine learning education and research at Penn State.',
    images: ['/api/og?title=About ML@PSU&description=Our mission to advance machine learning education and research at Penn State'],
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <MotionDiv 
          className="flex justify-center items-center mb-24 mt-8"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-mono tracking-tight text-black text-center">About ML@PSU</h1>
        </MotionDiv>

        <MotionDiv 
          className="text-left max-w-2xl mx-auto space-y-8 mb-32"
          variants={fadeIn}
        >
          <div className="space-y-12 text-black">
            <div>
              <h2 className="text-xl font-bold mb-4 text-black">
                Our Mission
              </h2>
              <p className="leading-relaxed text-black">
                We&apos;re on a mission to make machine learning education accessible, engaging, and fun. 
                Through workshops, talks, and hands-on projects, we help students dive into the 
                exciting world of AI.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-black">
                What We Do
              </h2>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  Host weekly workshops and tech talks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  Organize hands-on coding sessions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  Connect students with industry experts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">•</span>
                  Build cool ML projects together
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-black">
                Why Join Us?
              </h2>
              <p className="leading-relaxed text-black">
                Whether you&apos;re a complete beginner or a seasoned ML engineer, there&apos;s a place for you here. 
                We believe in learning together and helping each other grow through hands-on projects, expert mentorship, and collaborative learning.
              </p>
            </div>

          </div>
        </MotionDiv>

        <div className="flex flex-col items-center justify-center gap-6 mb-32">
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
            <a
              href="https://tally.so/r/mJWMy7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-medium flex-1 min-w-[180px]
                       text-center font-bold hover:bg-gray-800 transition-colors
                       border-2 border-black"
            >
              Join ML@PSU
            </a>

            <Link
              href="/become-a-speaker"
              className="bg-black text-white px-6 py-3 rounded-full font-medium flex-1 min-w-[180px]
                       text-center font-bold hover:bg-gray-800 transition-colors
                       border-2 border-black"
            >
              Become a Speaker
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-2">
            <a
              href="https://discord.gg/4BUhteYYgT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-[#5865F2] transition-all duration-200 underline-offset-4"
            >
              Discord
            </a>
            <a
              href="https://groupme.com/join_group/103911031/6hLBvx9a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-[#00AFF0] transition-all duration-200 underline-offset-4"
            >
              GroupMe
            </a>
            <a
              href="https://lu.ma/mlpsu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-[#9333ea] transition-all duration-200 underline-offset-4"
            >
              Calendar
            </a>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}