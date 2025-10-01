"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MotionDiv, fadeIn, stagger } from '../components/motion'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const staff = [
  { name: 'Pranav Karra', role: 'Founder & President', link: 'https://pranavkarra.me', image: '/team/pranav.jpeg' },
  { name: 'Evan Sinocchi', role: 'Vice President', link: 'https://www.linkedin.com/in/esinocchi/', image: '/team/evan.jpg' },
  { name: 'Manit Garg', role: 'Treasurer', link: 'https://www.linkedin.com/in/manitgarg/', image: '/team/manit.jpeg' },
  { name: 'Dhruva Nagesh', role: 'Technical Staff', link: 'https://www.linkedin.com/in/dhruva-nagesh', image: '/team/dhruva.jpeg' },
  { name: 'Arshawn Vossoughi', role: 'Technical Staff', link: 'https://www.linkedin.com/in/arshvoss/', image: '/team/Arshawn.jpg' },
  { name: 'Jacob Meert', role: 'Technical Staff', link: 'https://www.linkedin.com/in/jacob-meert/', image: '/team/jacob.jpg' },
  { name: 'Kasra Ghadimi', role: 'Technical Staff', link: 'https://www.linkedin.com/in/kasraghadimi/', image: '/team/Kasra.jpg' },
  { name: 'Billy Richardt', role: 'Technical Staff', link: 'https://www.linkedin.com/in/williamrichardtiv/', image: '/team/billy.jpg' },
  { name: 'Ishaan Narang', role: 'Event Planner', link: 'https://www.linkedin.com/in/ishaannarang22/', image: '/team/ishaan.jpg' }
]

const pastSpeakers = [
  {
    name: 'Greg Fiengold',
    link: 'https://www.linkedin.com/in/greg-feingold-3a890a91/',
    company_logo: '/pplx logo.png'
  },
  { 
    name: 'Sree Bhattacharya',
    link: 'https://www.linkedin.com/in/sree-bhattacharyya/',
    company_logo: '/psu logo.png'
  },
  { 
    name: 'Marmik Chaudhari',
    link: 'https://marmik.xyz',
    company_logo: '/psu logo.png'
  }
]


const sponsors = [
  { name: 'warp', image: '/sponsor/warp.png', link: 'https://www.warp.dev/' },
  { name: 'pplx', image: '/sponsor/pplx.png', link: 'https://www.perplexity.ai/' },
  { name: 'modal labs', image: '/sponsor/modal.png', link: 'https://modal.com/' },
  { name: 'psu', image: '/sponsor/psu.png', link: 'https://www.psu.edu/' },
  { name: 'obsbot', image: '/sponsor/obsbot.png', link: 'https://www.obsbot.com/' },
]

export default function Home() {
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
          <h1 className="text-4xl font-mono tracking-tight text-black">Welcome to ML@PSU</h1>
        </MotionDiv>

        <MotionDiv 
          className="text-left max-w-2xl mx-auto space-y-8 mb-32"
          variants={fadeIn}
        >
          <p className="leading-relaxed whitespace-pre-wrap text-black">
            ML@PSU is a community of students passionate about machine learning and artificial intelligence. We bring together learners at all levels to explore cutting-edge research, work on practical projects, and advance our understanding of ML together.
          </p>
          <p className="leading-relaxed whitespace-pre-wrap text-black">
            We host regular workshops, invite industry speakers, and provide funding support for members attending conferences or building projects. Our active Discord community shares research papers, discusses the latest developments in AI, and collaborates on learning initiatives.
          </p>
          <p className="leading-relaxed whitespace-pre-wrap text-black">
            Whether you&apos;re just starting your ML journey or already experienced, we offer resources, mentorship, and opportunities to grow your skills while contributing to the broader ML community at Penn State.
          </p>
        </MotionDiv>

        <div 
          className="flex flex-col items-center justify-center gap-6 mb-32"
        >
          {/* Main buttons side by side */}
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

            <a
              href="#resources-we-offer"
              className="bg-black text-white px-6 py-3 rounded-full font-medium flex-1 min-w-[180px]
                       text-center font-bold hover:bg-gray-800 transition-colors
                       border-2 border-black"
            >
              Resources we offer
            </a>
          </div>

          {/* Social links row */}
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

      {/* Attribution text */}
      <div className="text-center text-black text-sm opacity-50 mb-8">
        Design & background inspired by <a href="https://un.ms/pile" target="_blank" rel="noopener noreferrer" className="underline">un.ms/pile</a>
      </div>

      {/* Section that ends the video background and contains sponsors onwards - with straight edge */}
      <div className="relative bg-white w-full" style={{ marginTop: "0", paddingTop: "2rem", position: "relative", zIndex: 10 }}>
        {/* Add an extra white block to ensure complete coverage of the video */}
        <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{ transform: "translateY(-100%)" }}></div>
        
        {/* Add another white block at the bottom to ensure the video doesn't peek through */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white" style={{ transform: "translateY(100%)" }}></div>
        
        <MotionDiv 
          className="max-w-4xl mx-auto px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <MotionDiv 
            className="max-w-3xl mx-auto mb-32 text-center"
            variants={fadeIn}
          >
            <h2 className="text-xl font-bold mb-8">Our Sponsors</h2>
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={120}
                    height={60}
                    className="object-contain h-12"
                  />
                </Link>
              ))}
            </div>
          </MotionDiv>


          <MotionDiv 
            className="max-w-3xl mx-auto mb-32"
            variants={fadeIn}
          >
            <h2 className="text-xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="w-full flex justify-center">
              <iframe
                src="https://lu.ma/embed/calendar/cal-3mrXkQHS4duefEd/events?lt=light"
                width="100%"
                height="450"
                style={{ border: '2px solid white', borderRadius: '12px' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-4">We use Luma to manage our calendar, newsletter, and events.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://apps.apple.com/us/app/luma-delightful-events/id1546150895" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-700 hover:bg-blue-500/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  App Store
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.luma.studio&hl=en_US" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-700 hover:bg-green-500/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  Play Store
                </a>
                <a 
                  href="https://lu.ma/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500/20 text-gray-700 hover:bg-gray-500/30 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                  </svg>
                  Web
                </a>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            className="max-w-3xl mx-auto mb-32"
            variants={fadeIn}
            id="resources-we-offer"
            style={{ scrollMarginTop: '100px' }}
          >
            <h2 className="text-xl font-bold mb-8 text-center">What We Are Offering</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Anthropic Credits Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/claude.png"
                      alt="Anthropic Claude Logo"
                      width={120}
                      height={60}
                      className="object-contain h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Anthropic Credits</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    $5-10/mo credits that can be used for Claude Code, Projects, Cursor, and more.
                  </p>
                  <div className="text-center text-lg font-medium mb-4 text-gray-700">$5-10/mo</div>
                  <a
                    href="https://tally.so/r/w8RW2P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-3 rounded-lg font-medium 
                             hover:bg-gray-800 transition-colors
                             text-center block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* OpenAI Credits Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/openai.png"
                      alt="OpenAI Logo"
                      width={120}
                      height={60}
                      className="object-contain h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">OpenAI Credits</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    $5-10/mo credits that can be used for projects, Cursor, and anything else OpenAI offers.
                  </p>
                  <div className="text-center text-lg font-medium mb-4 text-gray-700">$5-10/mo</div>
                  <a
                    href="https://tally.so/r/w8RW2P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-3 rounded-lg font-medium 
                             hover:bg-gray-800 transition-colors
                             text-center block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Modal Credits Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/sponsor/modal.png"
                      alt="Modal Logo"
                      width={120}
                      height={60}
                      className="object-contain h-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Modal Credits</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    $5-30/mo credits (up to $100/mo with proper research proposal and advisor approval). Rent GPUs for inference, training, experiments, or research.
                  </p>
                  <div className="text-center text-lg font-medium mb-4 text-gray-700">$5-30/mo up to $100/mo</div>
                  <a
                    href="https://tally.so/r/n0DYP6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-3 rounded-lg font-medium 
                             hover:bg-gray-800 transition-colors
                             text-center block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            className="space-y-8 mb-32"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staff.map((member) => (
                <div key={member.name} className="flex items-center gap-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-16 h-16 hover:scale-105 transition-transform"
                  />
                  <div className="space-y-2">
                    {!member.link ? (
                      <span className="text-lg">{member.name}</span>
                    ) : (
                      <Link
                        href={member.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lg underline hover:text-[#FA8072] transition-all duration-200 underline-offset-4"
                      >
                        {member.name}
                      </Link>
                    )}
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv 
            className="space-y-8 mb-16"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold">Past Speakers</h2>
            <div className="space-y-4">
              {pastSpeakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-4">
                  <Image
                    src={speaker.company_logo}
                    alt={`${speaker.name}'s Company Logo`}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <Link 
                    href={speaker.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg underline hover:text-[#FA8072] transition-all duration-200 underline-offset-4"
                  >
                    {speaker.name}
                  </Link>
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </div>
  )
}
