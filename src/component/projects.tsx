'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Mobi-Rent',
    description:
      'A secure and intelligent car rental platform built to transform the underdeveloped rental infrastructure in my country. Empowers rental services and customers with seamless online booking, fleet management, and fraud prevention.',
    image: '/mobi-rent.webp',
    webLink: 'https://mobi-rent.example.com',
    githubLink: 'https://github.com/example/mobi-rent',
    techIcons: [
      '/nextdotjs.svg',
      '/tailwindcss.svg',
      '/supabase.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
  {
    id: 2,
    title: 'Tutor-Finder',
    description:
      'A full-stack platform connecting learners to tutors with live collaboration tools, API integrations, and an AI model that recommends the best tutor based on learning style and preferences. Developed during my Tech-Chantier internship.',
    image: '/tutor-finder.png',
    webLink: 'https://tutor-finder.example.com',
    githubLink: 'https://github.com/example/tutor-finder',
    techIcons: [
      '/react.svg',
      '/tailwindcss.svg',
      '/framer.svg',
      '/nodedotjs.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
  {
    id: 3,
    title: 'NiaTrust Wallet',
    description:
      'A fintech escrow and savings solution enabling secure peer-to-peer transactions, group savings, and conditional fund releases — designed to revolutionize online financial trust and collaboration.',
    image: '/nia-trust.png',
    webLink: 'https://niatrust.example.com',
    githubLink: 'https://github.com/example/niatrust',
    techIcons: [
      '/nextdotjs.svg',
      '/tailwindcss.svg',
      '/supabase.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
  {
    id: 4,
    title: 'StartWise',
    description:
      'Hackathon-winning platform (Code4Change 2025) guiding aspiring tech professionals with real-time mentorship, AI-powered career navigation, and access to local and remote job or internship opportunities.',
    image: '/startwise.png',
    webLink: 'https://startwise.example.com',
    githubLink: 'https://github.com/example/startwise',
    techIcons: [
      '/react.svg',
      '/tailwindcss.svg',
      '/firebase.svg',
      '/googlegemini.svg',
      '/git.svg',
      '/github.svg',
      '/openai.svg',
    ],
  },
  {
    id: 5,
    title: 'Cambrilia',
    description:
      'A multimodal AI assistant (text, image, and audio) designed for dynamic and natural interaction. Currently in development as an advanced alternative to traditional AI chat platforms.',
    image: '/cam-brilia.png',
    webLink: 'https://cambrilia.example.com',
    githubLink: 'https://github.com/example/cambrilia',
    techIcons: [
      '/react.svg',
      '/tailwindcss.svg',
      '/firebase.svg',
      '/googlegemini.svg',
      '/git.svg',
      '/github.svg',
      '/openai.svg',
    ],
  },
  {
    id: 6,
    title: 'KMC Restaurant',
    description:
      'A restaurant management and e-commerce site that boosted daily sales by 10×, enabling customers to order online, reserve tables, and make secure payments seamlessly.',
    image: '/kmc.png',
    webLink: 'https://kmc.example.com',
    githubLink: 'https://github.com/example/kmc-restaurant',
    techIcons: [
      '/nextdotjs.svg',
      '/tailwindcss.svg',
      '/nodedotjs.svg',
      '/mongodb.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
  {
    id: 7,
    title: 'stepUp',
    description:
      'A high-speed mini e-commerce site for selling footwear online, focused on lightning-fast transactions and efficient online payment processing.',
    image: '/stepUp.png',
    webLink: 'https://shoe-shop.example.com',
    githubLink: 'https://github.com/example/stepup',
    techIcons: [
      '/html5.svg',
      '/tailwindcss.svg',
      '/javascript.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
  {
    id: 8,
    title: 'Evogym',
    description:
      'A fitness membership platform for Evogym, streamlining subscriptions, payments, and class bookings to grow their customer base and retention rates.',
    image: '/evogym.png',
    webLink: 'https://evogym.example.com',
    githubLink: 'https://github.com/example/evogym',
    techIcons: [
      '/react.svg',
      '/tailwindcss.svg',
      '/nodedotjs.svg',
      '/mongodb.svg',
      '/git.svg',
      '/github.svg',
    ],
  },
];

const PROJECTS_PER_PAGE = 3;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const currentProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id='projects' className="relative py-20 px-4 md:px-10 lg:px-20 bg-black w-full">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Top Projects</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-center mb-16">
          Showcasing my most impactful work that solves real-world problems
        </p>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 relative"
            >
              {/* Image Wrapper with Dark BG */}
              <div className="h-48 bg-gray-900 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                  placeholder="empty"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {/* Tech Icons - Next to title */}
                  <div className="flex items-center gap-2 ml-3">
                    {project.techIcons.map((icon, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ color: '#ffffff' }}
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                          src={icon}
                          alt="Technology icon"
                          width={20}
                          height={20}
                          className="relative z-10 w-5 h-5 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-white/80 text-sm">{project.description}</p>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 hidden md:block rounded-md ${currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}
          >
            Previous
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === page ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-gray-800 text-white/70 hover:bg-gray-700'}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 hidden md:block rounded-md ${currentPage === totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}