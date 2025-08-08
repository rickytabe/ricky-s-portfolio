'use client';

import { motion } from 'framer-motion';
import { 
  Code2 as HiOutlineCode, 
  Server as TbServer2, 
  Smartphone as MdPhoneIphone, 
  Brain as FaBrain, 
  PenTool as FiPenTool, 
  ClipboardCheck as HiOutlineClipboardCheck,
  Calendar,
  Code,
  Users,
  Film
} from 'lucide-react';
import CountUp from '../Backgrounds/CountUp';

export default function ExpertiseSection() {
  const expertise = [
    {
      icon: <HiOutlineCode className="text-3xl" />,
      title: "Frontend Development",
      description: "Building immersive user interfaces with React, TailwindCSS, and animation-first workflows. I specialize in creating fast, interactive, and accessible web experiences that leave lasting impressions."
    },
    {
      icon: <TbServer2 className="text-3xl" />,
      title: "Backend Development",
      description: "Engineering robust, scalable APIs with Node.js and Supabase. I craft secure backend systems optimized for performance, cloud integration, and seamless frontend synergy."
    },
    {
      icon: <MdPhoneIphone className="text-3xl" />,
      title: "Mobile Development",
      description: "Creating sleek, cross-platform mobile applications with React Native and Expo. From concept to deployment, I deliver high-performing apps with native fluidity and design."
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI Automation & Integration",
      description: "Integrating intelligent systems with OpenAI, LangChain, and Supabase edge functions. Automating tasks, enhancing UX, and building smarter apps with AI-first thinking."
    },
    {
      icon: <FiPenTool className="text-3xl" />,
      title: "UI/UX Design",
      description: "Designing futuristic interfaces that align aesthetics with function. I apply design systems, motion design, and accessibility principles to create seamless user journeys."
    },
    {
      icon: <HiOutlineClipboardCheck className="text-3xl" />,
      title: "Project Management",
      description: "Planning, executing, and scaling tech projects with Agile methods and lean thinking. I manage cross-functional teams, timelines, and deliverables with precision and empathy."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-black py-12 px-4 md:px-10 lg:px-20 w-full">
      {/* Shared background elements from About section */}
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

      {/* Section content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Animated title */}
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
           <span className='text-blue-500'>#2</span> My Expertise
          </motion.h2>
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-72"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Expertise cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="h-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Glowing icon background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
                
                {/* Icon with gradient ring */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {item.description}
                </p>
                
                {/* Hover effect line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof with Counters - Now positioned below expertise cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Years of Experience */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <Calendar className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp from={0} to={3} duration={1.5} />
                <span className="text-blue-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Years Experience</p>
            </motion.div>

            {/* Projects Completed */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <Code className="text-purple-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                <CountUp from={0} to={15} duration={2} />
                <span className="text-purple-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Projects Completed</p>
            </motion.div>

            {/* Clients */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <Users className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp from={0} to={5} duration={1} />
                <span className="text-blue-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Happy Clients</p>
            </motion.div>

            {/* Commercials */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <Film className="text-purple-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                <CountUp from={0} to={2} duration={1} />
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Commercials</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}