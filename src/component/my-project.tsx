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
  // Add other projects following the same structure...
];

export default function ProjectsSection() {
  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-black w-full">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Top 8 Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcasing my most impactful work that solves real-world problems
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Glassmorphism card */}
              <div className="h-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
               
                
                {/* Project image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
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