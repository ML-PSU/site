'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const links = {
    pages: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Articles', href: '/articles' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
      { name: 'Become a Speaker', href: '/become-a-speaker' },
    ],
    social: [
      { name: 'Discord', href: 'https://discord.gg/4BUhteYYgT' },
      { name: 'GroupMe', href: 'https://groupme.com/join_group/103911031/6hLBvx9a' },
      { name: 'Luma Calendar', href: 'https://lu.ma/mlpsu' },
      { name: 'GitHub', href: 'https://github.com/ML-PSU' },
      { name: 'Email', href: 'mailto:machinelearningpennstate@gmail.com' },
      { name: 'Join ML@PSU', href: 'https://tally.so/r/mJWMy7' },
    ],
  }

  return (
    <footer className="relative w-full min-h-screen bg-[#FAF9F6] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.04) 0%, transparent 50%),
              linear-gradient(90deg, rgba(220, 38, 38, 0.02) 1px, transparent 1px),
              linear-gradient(0deg, rgba(220, 38, 38, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
            backgroundPosition: '0% 0%, 0% 0%, 0% 0%, 0% 0%',
          }}
        />
      </div>

      {/* Floating animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Subtle moving gradient overlay */}
      <div
        className="absolute inset-0 opacity-5 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col justify-between min-h-screen">
        {/* Top section with huge title */}
        <div className="pt-12">
          <h2 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-serif text-gray-900 leading-none tracking-tight">
            ml@psu
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mt-6 max-w-2xl">
            Machine Learning Club at Penn State University
          </p>
        </div>

        {/* Middle section with large spinning logo */}
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="ML@PSU Logo"
              width={300}
              height={300}
              priority
              className="animate-spin-slow opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Bottom section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-12">
          {/* Pages Links */}
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Explore</h3>
            <ul className="space-y-3">
              {links.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-gray-700 hover:text-red-600 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Connect</h3>
            <ul className="space-y-3">
              {links.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-red-600 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Machine Learning @ Penn State University</p>
            <p className="font-mono">mlpsu.org</p>
          </div>
        </div>
      </div>

      {/* Animated dot pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20">
        <div className="absolute inset-0 animate-pulse-slow">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-red-600 rounded-full"
              style={{
                left: `${i * 5}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
