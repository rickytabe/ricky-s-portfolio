'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Add section detection logic here if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 z-50 w-full px-4`}
    >
      <div className={`mx-auto max-w-5xl w-full`}>
        <div className={`flex items-center justify-between p-3 rounded-full transition-all duration-300
          ${scrolled ? 'backdrop-blur-xl bg-purple-800/20 border border-white/20 shadow-xl' : 'backdrop-blur-lg bg-purple-800/30 border border-white/10'}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-md"
            >
              TR
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {['about', 'projects', 'blog', 'contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item}`}
                className={`px-4 py-2 rounded-full text-md font-medium capitalize transition-all
                  ${activeSection === item ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}
                `}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all"
          >
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}