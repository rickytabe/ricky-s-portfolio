'use client';

import { motion } from 'framer-motion';
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

  // Infinite auto-scroll animation using CSS animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.animation = 'scroll 30s linear infinite';
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-black overflow-hidden w-full">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-90"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            <span className='text-blue-500'>#4</span> COMPANIES AND CLIENTS
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-137"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        {/* Infinite scrolling company logos using CSS animation */}
        <div className="relative h-64 overflow-hidden py-44">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          
          <div
            ref={containerRef}
            className="flex items-center h-full w-max"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-64 h-64 mx-8 flex items-center justify-center group"
              >
                <div className="relative w-full h-full bg-gray-900/80 border border-white/10 rounded-2xl p-8 flex items-center justify-center hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="max-h-55 max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}