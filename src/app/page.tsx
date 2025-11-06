import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../components/motion'
import { ArrowUpRight } from 'lucide-react'

const staff = [
  { name: 'Pranav Karra', role: 'President', link: 'https://pranavkarra.me' },
  { name: 'Vanisha Gupta', role: 'Vice President', link: 'https://www.linkedin.com/in/vanishagupta/' },
  { name: 'Ian Yee', role: 'Treasurer', link: '#' },
  { name: 'Krishna Pagrut', role: 'Tech Lead', link: 'https://www.linkedin.com/in/krishnapagrut/' },
  { name: 'Pihu Agarwal', role: 'Secretary', link: 'https://www.linkedin.com/in/pihuagarwal/' },
  { name: 'Manit Garg', role: 'Event Planner', link: 'https://www.linkedin.com/in/manitgarg/' },
  { name: 'Evan Sinocchi', role: 'Software Engineer', link: 'https://www.linkedin.com/in/esinocchi/'},
  { name: 'Dhruva Nagesh', role: 'Software Engineer', link: 'https://www.linkedin.com/in/dhruva-nagesh'}
]

const pastSpeakers = [
  { name: 'Marmik Chaudhari', link: 'https://marmik.xyz' },
  { name: 'Sree Bhattacharya', link: 'https://www.linkedin.com/in/sree-bhattacharyya/' },
]

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

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <MotionDiv
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-16 pt-8 text-sm md:text-base">
          <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            about <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            resources <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/articles" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            articles <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
            contact us <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <MotionDiv
          className="flex justify-between items-center mb-28"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight">ml@psu</h1>
          <Image
            src="/logo.svg"
            alt="ML@PSU Logo"
            width={60}
            height={60}
            priority
            className="animate-spin-slow"
          />
        </MotionDiv>

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
          className="text-left max-w-2xl mx-auto space-y-6 mb-32"
          variants={fadeIn}
        >
          <p className="text-gray-800 text-lg leading-relaxed">
            Hey, nice to meet you through the web! We&apos;re just a group of friends who got really excited about machine learning and wanted to create a space where we could geek out together.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            We started this club because we wanted a place to meet other cool people interested in ML, invite interesting speakers, and get some funding to support members building awesome projects or attending conferences.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            We regularly hold events - sometimes it&apos;s a guest speaker sharing their work, other times it&apos;s casual workshops where we walk through cool ML concepts together. We&apos;ve got a pretty active Discord server too, where we share everything from research papers to the latest AI news and tools.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            If you&apos;re motivated and curious about ML, we can help you out with resources like subscriptions, and maybe even take you along to conferences. We&apos;re all about supporting each other&apos;s learning journey!
          </p>
        </MotionDiv>

        <MotionDiv
          className="text-center flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-32"
          variants={fadeIn}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSelQdK7kY8PMDSgemp9ksCSRHwji2qg3HgybPZuGuFMFrSVLg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 hover:text-red-600 transition-colors flex items-center justify-center gap-1 font-medium"
          >
            become a member <ArrowUpRight className="w-5 h-5" />
          </Link>
          <Link
            href="/become-a-speaker"
            className="text-lg text-gray-800 hover:text-red-600 transition-colors flex items-center justify-center gap-1 font-medium"
          >
            become a speaker <ArrowUpRight className="w-5 h-5" />
          </Link>
        </MotionDiv>

        <MotionDiv
          className="space-y-10 mb-32 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-serif">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staff.map((member) => (
              <div key={member.name} className="space-y-1 border-l-2 border-gray-300 pl-4 hover:border-red-600 transition-colors">
                <Link
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
                >
                  {member.name} <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          className="space-y-8 mb-16 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          <h2 className="text-4xl font-serif">Past Speakers</h2>
          <div className="space-y-4">
            {pastSpeakers.map((speaker) => (
              <div key={speaker.name} className="border-l-2 border-gray-300 pl-4 hover:border-red-600 transition-colors">
                <Link
                  href={speaker.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-900 hover:text-red-600 transition-colors flex items-center gap-1 font-medium"
                >
                  {speaker.name} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}
