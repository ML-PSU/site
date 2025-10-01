import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '../../components/motion'


export default function BecomeASpeaker() {
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
          <h1 className="text-4xl font-mono tracking-tight text-black text-center">Become a Speaker</h1>
        </MotionDiv>

        <MotionDiv 
          className="text-left max-w-2xl mx-auto space-y-8 mb-32"
          variants={fadeIn}
        >
          <div className="space-y-12 text-black">
          
            <div>
              <p className="leading-relaxed text-black">
                We love hearing from people who are passionate about what they do! If you&apos;re interested in speaking at one of our events, 
                just <Link href="/contact" className="text-[#FA8072] hover:opacity-80 inline-flex items-center">
                  shoot us an email <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>. We&apos;ll review your proposal and send you a calendar booking link.
              </p>

              <p className="leading-relaxed text-black mt-4">
                You can choose to speak either in-person or online. We do prefer in-person talks and can provide travel and accommodation 
                arrangements at our convenience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-black">You might be a great fit if you:</h2>
              <ul className="text-black space-y-2 list-none leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Have done something really cool
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Are distinguished in your field
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Have unique experiences to share
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Are a researcher in AI/ML
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Work in academia or industry
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-black">What&apos;s in it for you?</h2>
              <ul className="text-black space-y-2 list-none leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Connect with an engaged audience passionate about technology
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Network with other speakers and industry professionals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Get your talk recorded and featured on our platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FA8072] mt-1">•</span>
                  Build your personal brand and speaking portfolio
                </li>
              </ul>
              <p className="text-sm text-black mt-4 opacity-75">
                With your consent, we record all talks and make them available on our website and YouTube channel, helping you reach 
                an even wider audience.
              </p>
            </div>

          </div>
        </MotionDiv>

        <div className="flex flex-col items-center justify-center gap-6 mb-32">
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-full font-medium flex-1 min-w-[180px]
                       text-center font-bold hover:bg-gray-800 transition-colors
                       border-2 border-black"
            >
              Contact Us
            </Link>

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
