'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const companies = [
  { name: 'Tech Chantier', logo: 'https://techchantier.com/frontend/assets/img/logos/logo-square-teal-bg.png' },
  { name: 'FastChops', logo: 'https://www.f6s.com/content-resource/profiles/5882159_144b4abd2c1856f7be7bbd53e640f582f4010fe6_th1.jpg' },
  { name: 'TutorFinder', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzMBfWUJo6avRWENnBCIKF4zjIlWhvybVHDB3VeZtE4Vs166318_sK8zE0WpepHY3TgE&usqp=CAU' },
  { name: 'StartWise', logo: 'https://cdn.prod.website-files.com/64acbc6e332ae9274b5f8957/64b09bfd2a38198b99029d5a_Vector.png' },
  { name: 'FabTech', logo: 'https://mma.prnewswire.com/media/600346/FABTECH_New_Logo.jpg?p=facebook' },
  { name: 'Delc', logo: 'https://obendesmond.org/wp-content/uploads/2024/04/DELC_LOGO-1.png' }
];

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const particlesRef = useRef<HTMLDivElement | null>(null);

  // Infinite auto-scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = 320; // width of each card + margin
    const scrollSpeed = 50; // pixels per second
    const totalWidth = itemWidth * companies.length;
    const duration = totalWidth / scrollSpeed;

    const animateScroll = async () => {
      // Animate to the end
      await controls.start({
        x: -totalWidth,
        transition: { duration, ease: "linear" }
      });
      
      // Immediately reset to start (no animation)
      controls.set({ x: 0 });
      
      // Repeat
      animateScroll();
    };

    animateScroll();

    return () => controls.stop();
  }, [controls]);

  // Create animated particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-blue-500';
      
      // Random initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 10 + 2}px`;
      particle.style.height = particle.style.width;
      
      container.appendChild(particle);

      // Animate particle
      const duration = Math.random() * 15 + 10;
      const keyframes = [
        { 
          transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
          opacity: 0.2
        },
        { 
          transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
          opacity: 0.5
        },
      ];

      particle.animate(keyframes, {
        duration: duration * 1000,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out'
      });
    }
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-black overflow-hidden w-full">
      {/* Animated particles background */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
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
                             <span className='text-blue-500'>#4</span> COMPANIES AND CLIENTS
                            </motion.h2>
                            <motion.div
                              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-137"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                              viewport={{ once: true }}
                            />
                          </motion.div>
        
        {/* Infinite scrolling company logos */}
        <div className="relative h-64 overflow-hidden py-44">
          <motion.div
            ref={containerRef}
            className="flex items-center h-full"
            animate={controls}
            style={{ width: 'max-content' }}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-64 h-64 mx-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative w-full h-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center hover:border-blue-400/50 transition-all duration-300">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-55 max-w-full object-contain "
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}