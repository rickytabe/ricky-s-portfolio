'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      url: "https://github.com/yourusername",
      name: "GitHub"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      url: "https://twitter.com/yourhandle",
      name: "Twitter"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      url: "https://linkedin.com/in/yourprofile",
      name: "LinkedIn"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      url: "mailto:your@email.com",
      name: "Email"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detect active section
      const sections = Links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full px-4 py-2`}
    >
      <div className={`mx-auto max-w-7xl w-full`}>
        <div className={`flex items-center justify-between p-3 rounded-full transition-all duration-300
          ${scrolled ? 'backdrop-blur-xl bg-black/80 border border-white/20 shadow-lg' : 'backdrop-blur-md bg-black/60 border border-white/10'}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              TR
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {Links.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all relative overflow-hidden
                  ${activeSection === item.id ? 'text-white' : 'text-white/70 hover:text-white'}
                `}
              >
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Social Links & Resume - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all flex items-center gap-2"
            >
              Resume
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                👋
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="md:hidden mt-2 mx-4 rounded-xl backdrop-blur-xl bg-black/80 border border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {Links.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium capitalize transition-all
                    ${activeSection === item.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center hover:shadow-lg transition-all"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}