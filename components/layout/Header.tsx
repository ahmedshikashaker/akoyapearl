'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui'
import { ThemeToggle } from '@/components/ThemeToggle'
import { NAV_LINKS } from '@/data/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <nav className="container-section" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#" 
            className="group flex items-center gap-3"
            aria-label="Akoya Pearl - Home"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Akoya Pearl Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-navy-900 dark:text-white">
              Akoya <span className="text-gold-600 dark:text-gold-400">Pearl</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white 
                           font-medium transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={() => handleNavClick('#contact')}
              size="sm"
            >
              Request a Consultation
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 -mr-2 text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          <div 
            className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw]
                       bg-white dark:bg-navy-900 shadow-2xl
                       animate-slide-in-right"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <span className="text-lg font-bold text-navy-900 dark:text-white">Menu</span>
              <button
                className="p-2 -mr-2 text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-slate-700 dark:text-slate-300 
                             hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-navy-900 dark:hover:text-white 
                             rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                <Button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full"
                >
                  Request a Consultation
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
