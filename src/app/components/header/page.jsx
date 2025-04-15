'use client'

/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className="relative z-10">
              <img 
                src="/assets/images/Logo.png" 
                alt="Dansk SuperRally Logo" 
                className={`transition-all duration-300 ${
                  scrolled ? 'h-20 w-auto' : 'h-24 w-auto'
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {[
                  { href: '/nyheder', label: 'Nyheder' },
                  { href: '/rallies', label: 'Rallies' },
                  { href: 'https://www.rally-results.dk/events', label: 'Resultater', target: '_blank' },
                  { href: '/hvaderdsr', label: 'Hvad er DSR?' },
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      target={item.target || '_self'}
                      className="relative px-4 py-2 text-gray-800 font-medium uppercase text-base tracking-wide block hover:text-red-600 transition-colors group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                aria-label="Åbn menu"
                onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="lg:hidden hidden">
          <div className="px-2 pt-2 pb-4 bg-white shadow-lg rounded-b-lg">
            <ul className="space-y-1">
              {[
                { href: '/nyheder', label: 'Nyheder' },
                { href: '/rallies', label: 'Rallies' },
                { href: 'https://www.rally-results.dk/events', label: 'Resultater', target: '_blank' },
                { href: '/hvaderdsr', label: 'Hvad er DSR?' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    target={item.target || '_self'}
                    className="block px-4 py-3 text-gray-800 font-medium uppercase hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-28"></div>
    </>
  )
}