'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-4 md:py-10 px-4 w-full h-full">
        {/* Animated title */}
              <div className='relative max-w-7xl mx-auto'>
                  <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.h2
                      className="text-3xl md:text-4xl font-bold tracking-wide"
                      animate={{
                        textShadow: [
                          '0 0 8px rgba(59, 130, 246, 0)',
                          '0 0 8px rgba(59, 130, 246, 0.3)',
                          '0 0 8px rgba(59, 130, 246, 0)'
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity
                      }}
                    >
                      <span className='text-blue-500'>#1</span> ABOUT ME
                    </motion.h2>
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-64"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
              </div>

      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500"
              initial={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                width: Math.random() * 10 + 2 + 'px',
                height: Math.random() * 10 + 2 + 'px'
              }}
              animate={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image with futuristic frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-square w-full md:h-170 h-3/4 max-w-lg mx-auto rounded-md">
            {/* Hexagon clip-path */}
            <div className="absolute inset-0">
              <Image
                src="/suit-photo.png"
                alt="Tabe Rickson"
                fill
                className="object-cover rounded-2xl overflow-clip"
              />
            </div>
            
            {/* Glowing border */}
            <div className="absolute inset-0 border-2 rounded-md">
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(59, 130, 246, 0.5)',
                    '0 0 30px rgba(124, 58, 237, 0.7)',
                    '0 0 15px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Glassmorphic content panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl"
        >
          <h2 className="text-blue-400 font-mono uppercase tracking-widest text-sm mb-2">
            About
          </h2>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tabe Rickson
            </span>
          </h1>

          {/* Role cards */}
          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Tech Architect & Software Engineer',
                description: 'Tabe Rickson is a versatile IT expert and software engineer with a sharp instinct for innovation. With extensive experience in modern software development, mobile app engineering, and full-stack systems, he delivers cutting-edge solutions for businesses of all scales.'
              },
              {
                number: '02',
                title: 'Entrepreneurial Visionary',
                description: 'Driven by a passion for meaningful impact, Tabe builds ventures that create value and solve real-world problems. His leadership bridges technology and business strategy to drive sustainable growth.'
              },
              {
                number: '03',
                title: 'Futurist & Change Maker',
                description: 'A changemaker by nature, Tabe believes in technology as a force for good. He actively shapes the future by empowering developer communities and nurturing collaborative ecosystems.'
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.1 }}
                  >
                    {role.number}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-white/80">
                      {role.description}
                    </p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}