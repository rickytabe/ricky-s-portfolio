'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github,  Mail, ExternalLink, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="w-5 h-5" />, 
      url: 'https://github.com/yourusername' 
    },
    {
      icon: <img src="/x.svg" alt="x" className="w-5 h-5 text-white invert opacity-70" />,
      url: "https://twitter.com/rickytabe",
      name: "X"
    },
    { 
      name: 'LinkedIn', 
      icon: <LinkedinIcon className="w-5 h-5" />, 
      url: 'https://linkedin.com/in/yourprofile' 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      url: 'mailto:your@email.com' 
    }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
    { name: 'Resume', url: '/resume.pdf' }
  ];

  return (
    <footer  className="relative bg-black border-t border-white/10 w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-30"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/suit-photo.png" 
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Tabe Rickson
              </span>
            </Link>
            <p className="text-white/70 text-sm">
              Building digital experiences that matter. Let&apos;s create something amazing together.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white  hover:scale-110 transform transition-transform"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.url.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Stay Updated
            </h3>
            <p className="text-white/60 text-sm">
              Subscribe to my newsletter for updates on new projects and articles.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}