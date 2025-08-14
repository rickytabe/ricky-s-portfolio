'use client';

import RippleGrid from "@/Backgrounds/RippleGrid/RippleGrid";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Linkedin, Mail, GithubIcon } from "lucide-react";
import RotatingText from "@/Backgrounds/rotatingtext";


export default function HeroSection() {
    return (
        <section id="home" className="relative h-full w-full overflow-hidden bg-black text-white -mt-25 py-30">
            {/* Background - Ripple Grid */}
            <div className="absolute inset-0 pt-30">
                <RippleGrid
                    enableRainbow={true}
                    gridColor="#ffffff"
                    rippleIntensity={0.08}
                    gridSize={10}
                    gridThickness={50}
                    mouseInteraction={true}
                    mouseInteractionRadius={1.2}
                    opacity={0.5}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center mt-30">
                <div className="container mx-auto px-4">
                    {/* Two-Column Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column - Left */}
                        <motion.div
                            className="space-y-4 md:ml-30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                className="text-lg font-mono md:text-xl text-blue-400 font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                HELLO, MY NAME IS
                            </motion.p>

                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Tabe Rickson
                                </span>
                            </motion.h1>

                            <motion.div
                                className="pt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}

                            >
                                <div className="font-bold font-mono text-sm md:text-2xl text-gray-300 ml-4 flex items-center justify-start ">
                                    <RotatingText
                                        texts={['FULLSTACK DEVELOPER', 'MOBILE DEVELOPER', 'SOFTWARE ENGINEER', 'AI DEVELOPER', 'UX/UI DESIGNER']}
                                        mainClassName="px-4 bg-gradient-to-r from-blue-400 to-purple-500  text-white overflow-hidden pt-3 pb-2 justify-center rounded-lg"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={4000}
                                    />
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4 mx-4">
                                    <a href="https://x.com/RickyTabe" className="bg-purple-500/50 backdrop-blur-md p-4 rounded-md " target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                        <path d="M19.961 2.52h-3.65l-4.32 5.92L7.63 2.52H2.77l6.91 9.19-7.11 9.81h3.64l4.65-6.38 4.75 6.38h4.88l-7.33-9.83 7.7-9.17Z" />
                                    </svg>
                                    </a>
                                    <a href="https://linkedin.com/in/taberickson" className=" bg-purple-500/50 backdrop-blur-md p-4 rounded-md" target="_blank"><Linkedin /></a>
                                    <a href="mailto:rickytabe2@gmail.com" className=" bg-purple-500/50 backdrop-blur-md p-4 rounded-md hidden md:block" ><Mail /></a>
                                    <a href="https://github.com/rickytabe" className=" bg-purple-500/50 backdrop-blur-md p-4 rounded-md"><GithubIcon /></a>
                                </div>
                                <h2 className="text-sm font-mono sm:text-3xl md:text-xl font-semibold text-center md:text-start max-w-3xl mx-auto pt-6 mt-4 bg-black/50 backdrop-blur-md px-4 py-2">
                                    &quot;I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">fast, scalable, reliable and user-friendly </span>apps that deliver performance and a seemless digital experience.&quot;
                                </h2>

                            </motion.div>
                        </motion.div>

                        {/* Image Column - Right */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl  overflow-hidden shadow-2xl md:ml-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
                                <Image
                                    src="/my-photo2.png"
                                    alt="Tabe Rickson"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-screen opacity-30"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen opacity-30"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10  ">
                <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white flex items-start justify-center p-2">
                    <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    ></motion.div>
                </div>
            </div>
        </section>
    );
}