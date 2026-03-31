'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BlogPreviewSection = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Optimizing Next.js Performance",
      excerpt: "Learn advanced techniques to boost your Next.js application's speed and efficiency.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Performance",
      image: "/nextjs-performance.jpg"
    },
    {
      id: 2,
      title: "The Future of React State Management",
      excerpt: "Exploring emerging patterns beyond Redux and Context API for state management.",
      date: "June 2, 2023",
      readTime: "7 min read",
      category: "React",
      image: "/react-state.jpg"
    },
    {
      id: 3,
      title: "CSS Architecture in Large Projects",
      excerpt: "How we scaled our CSS approach for a project with 50+ developers.",
      date: "June 18, 2023",
      readTime: "8 min read",
      category: "CSS",
      image: "/css-architecture.jpg"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end  mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2  ">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Articles</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Thoughts, tutorials and insights about modern web development.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <Link 
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;