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
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>

      {/* Section content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            <span className='text-blue-500'>#2</span> My Expertise
          </h2>
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2 w-72"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Expertise cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Simplified card */}
              <div className="h-full bg-gray-900/80 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Icon */}
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
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof with Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Years of Experience */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Calendar className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp from={0} to={3} duration={1.5} />
                <span className="text-blue-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Years Experience</p>
            </div>

            {/* Projects Completed */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Code className="text-purple-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                <CountUp from={0} to={15} duration={2} />
                <span className="text-purple-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Projects Completed</p>
            </div>

            {/* Clients */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="text-blue-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp from={0} to={5} duration={1} />
                <span className="text-blue-400">+</span>
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Happy Clients</p>
            </div>

            {/* Commercials */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Film className="text-purple-400 w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                <CountUp from={0} to={2} duration={1} />
              </div>
              <p className="text-white/80 uppercase text-sm tracking-wider">Commercials</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}