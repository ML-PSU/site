"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/become-a-speaker', label: 'BECOME A SPEAKER' },
    { href: 'https://lu.ma/mlpsu', label: 'JOIN', isExternal: true },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-center px-6 lg:px-8 py-5">
        <div className="border-b-2 border-black pb-5 w-fit">
          <div className="flex justify-between items-center gap-32">
            {/* Brand with Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <Image
                src="/logo.svg"
                alt="ML@PSU Logo"
                width={36}
                height={36}
                priority
                className="w-9 h-9"
              />
              <span className="text-xl font-semibold text-black whitespace-nowrap" style={{ fontFamily: 'var(--font-funnel-display)' }}>ML@PSU</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold tracking-wide text-black hover:opacity-70 transition-opacity whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-funnel-display)' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl font-semibold tracking-wide transition-opacity whitespace-nowrap ${
                      isActive(link.href)
                        ? 'text-black'
                        : 'text-black hover:opacity-70'
                    }`}
                    style={{ fontFamily: 'var(--font-funnel-display)' }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:opacity-70 transition-opacity p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold tracking-wide text-black hover:opacity-70 transition-opacity px-2 py-1"
                  style={{ fontFamily: 'var(--font-funnel-display)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-semibold tracking-wide transition-opacity px-2 py-1 ${
                    isActive(link.href)
                      ? 'text-black'
                      : 'text-black hover:opacity-70'
                  }`}
                  style={{ fontFamily: 'var(--font-funnel-display)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
