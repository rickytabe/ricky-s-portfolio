'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Drop me a message below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-gray-900/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm mt:ml-20"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How should I call you?"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Where should I reply?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What would you like to discuss?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Form Status */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  Something went wrong. Please try again later.
                </div>
              )}
            </div>
          </form>

          {/* Image Column - Only visible on large screens */}
          <div className="hidden lg:block relative h-full">
            <div className="relative aspect-square w-3/4 h-full ml-20 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/suit-photo.png" // Replace with your image path
                alt="Profile Image"
                fill
                className="object-fit"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..." // Add your blur placeholder
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}