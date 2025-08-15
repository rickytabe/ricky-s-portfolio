'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github,  Linkedin, Mail, Menu, X, Download, FileText,  DownloadIcon } from 'lucide-react';
import RotatingText from '@/Backgrounds/rotatingtext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const Links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/rickytabe",
      name: "GitHub"
    },
    {
      icon: <img src="/x.svg" alt="x" className="w-5 h-5 text-white invert opacity-70" />,
      url: "https://twitter.com/rickytabe",
      name: "X"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/tabe-rickson",
      name: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:rickytabe2@email.com",
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

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tabe-Rickson.pdf';
    link.download = 'Tabe Rickson.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeModal(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full px-2 py-5`}
      >
        <div className={`mx-auto max-w-7xl w-full`}>
          <div className={`flex items-center justify-between p-3 rounded-full transition-all duration-300
            ${scrolled ? 'backdrop-blur-xl bg-purple-900/40 border border-white/20 shadow-lg' : 'backdrop-blur-md bg-purple-700/60 border border-white/10'}
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
            <div className="hidden lg:flex items-center gap-1">
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
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-full"
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

              <motion.button
                onClick={handleResumeClick}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all flex items-center gap-2"
              ><span className="hidden md:inline"><DownloadIcon className="w-4 h-4" /></span>
                <RotatingText
                  texts={[
                    "Download Resume",
                    "Get My CV",
                    "View My Experience"
                  ]}
                  mainClassName="bg-transparent text-white overflow-hidden justify-center font-serif "
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={10000}
                />
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  👋
                </motion.span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-white focus:outline-none"
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
              className="lg:hidden mt-2 mx-4 rounded-xl backdrop-blur-xl bg-black/80 border border-white/10 shadow-xl overflow-hidden"
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

                <motion.button
                  onClick={handleResumeClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Resume Download Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              className="bg-gray-900 border border-white/10 rounded-xl max-w-md w-full p-6 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Download Resume</h3>
                <p className="text-gray-300 mb-6">Would you like to download my resume in PDF format?</p>

                <div className="flex gap-3 w-full">
                  <motion.button
                    onClick={() => setShowResumeModal(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={downloadResume}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}