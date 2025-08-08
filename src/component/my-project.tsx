'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mobi-Rent',
    description: 'A secure and intelligent car rental platform built to transform the underdeveloped rental infrastructure in my country. Empowers rental services and customers with seamless online booking, fleet management, and fraud prevention.',
    image: './mobi-rent.webp',
    webLink: 'https://mobi-rent.example.com',
    githubLink: 'https://github.com/example/mobi-rent'
  },
  {
    id: 2,
    title: 'Tutor-Finder',
    description: 'A full-stack platform connecting learners to tutors with live collaboration tools, API integrations, and an AI model that recommends the best tutor based on learning style and preferences. Developed during my Tech-Chantier internship.',
    image: './tutor-finder.png',
    webLink: 'https://tutor-finder.example.com',
    githubLink: 'https://github.com/example/tutor-finder'
  },
  {
    id: 3,
    title: 'NiaTrust Wallet',
    description: 'A fintech escrow and savings solution enabling secure peer-to-peer transactions, group savings, and conditional fund releases — designed to revolutionize online financial trust and collaboration.',
    image: './nia-trust.png',
    webLink: 'https://niatrust.example.com',
    githubLink: 'https://github.com/example/niatrust'
  },
  {
    id: 4,
    title: 'StartWise',
    description: 'Hackathon-winning platform (Code4Change 2025) guiding aspiring tech professionals with real-time mentorship, AI-powered career navigation, and access to local and remote job or internship opportunities.',
    image: './startwise.png',
    webLink: 'https://startwise.example.com',
    githubLink: 'https://github.com/example/startwise'
  },
  {
    id: 5,
    title: 'Cambrilia',
    description: 'A multimodal AI assistant (text, image, and audio) designed for dynamic and natural interaction. Currently in development as an advanced alternative to traditional AI chat platforms.',
    image: './cam-brilia.png',
    webLink: 'https://cambrilia.example.com',
    githubLink: 'https://github.com/example/cambrilia'
  },
  {
    id: 6,
    title: 'KMC Restaurant',
    description: 'A restaurant management and e-commerce site that boosted daily sales by 10×, enabling customers to order online, reserve tables, and make secure payments seamlessly.',
    image: './kmc.png',
    webLink: 'https://kmc.example.com',
    githubLink: 'https://github.com/example/kmc-restaurant'
  },
  {
    id: 7,
    title: 'stepUp',
    description: 'A high-speed mini e-commerce site for selling footwear online, focused on lightning-fast transactions and efficient online payment processing.',
    image: './stepUp.png',
    webLink: 'https://shoe-shop.example.com',
    githubLink: 'https://github.com/example/stepup'
  },
  {
    id: 8,
    title: 'Evogym',
    description: 'A fitness membership platform for Evogym, streamlining subscriptions, payments, and class bookings to grow their customer base and retention rates.',
    image: './evogym.png',
    webLink: 'https://evogym.example.com',
    githubLink: 'https://github.com/example/evogym'
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-black w-full">
      {/* Simplified background - removed complex grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with simplified animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Top Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcasing my most impactful work that solves real-world problems
          </p>
        </motion.div>

        {/* Projects grid with simplified animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Simplified card without glassmorphism */}
              <div className="h-full bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Project image with priority on loading */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xs mr-2">
                      {project.id}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white/70 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.webLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white/70 hover:text-white transition-colors"
                      aria-label="Live website"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}