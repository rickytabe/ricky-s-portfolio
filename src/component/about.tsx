'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-4 md:py-10 px-4 w-full h-full">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>

      {/* Animated title */}
      <div className='relative max-w-7xl mx-auto'>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            <span className='text-blue-500'>#1</span> ABOUT ME
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-64"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-square w-full md:h-170 h-3/4 max-w-lg mx-auto rounded-md">
            <Image
              src="/suit-photo.png"
              alt="Tabe Rickson"
              fill
              className="object-cover rounded-2xl border-2 border-blue-400/30"
              priority
            />
          </div>
        </motion.div>

        {/* Content panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl"
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
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {role.number}
                  </div>
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
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}