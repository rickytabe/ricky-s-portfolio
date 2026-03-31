'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import supabase from '@/lib/supabase';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
}


const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/rickytabe',
  },
  {
    name: 'X',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M19.961 2.52h-3.65l-4.32 5.92L7.63 2.52H2.77l6.91 9.19-7.11 9.81h3.64l4.65-6.38 4.75 6.38h4.88l-7.33-9.83 7.7-9.17Z" />
      </svg>
    ),
    url: 'https://twitter.com/rickytabe',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com/in/taberickson',
  },
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    url: 'mailto:rickytabe2@gmail.com',
  },
  {
    name: 'WhatsApp',
    icon: <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 invert" />,
    url: 'https://wa.me/237671353341?text=Hi%20Tabe,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration%20or%20job%20opportunity.',
  },
];


export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
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

    // First try to insert into contacts
    try {
      const { error: contactError } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);
      if (contactError) throw contactError;
    } catch (err) {
      console.error('Error saving contact:', err);
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    // Then try to insert into subscribers
    // try {
    //   const { error: subscriberError } = await supabase
    //     .from('subscribers')
    //     .insert([{ name: formData.name, email: formData.email }]);
    //   if (subscriberError) throw subscriberError;
    // } catch (err) {
    //   console.error('Error saving subscriber:', err);
    //   setSubmitStatus('error');
    //   setIsSubmitting(false);
    //   setTimeout(() => setSubmitStatus('idle'), 5000);
    //   return;
    // }

    
    // Then send email via EmailJS
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log(result.text);
      toast.success('Message sent successfully to Tabe Rickson!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again later.');
      setSubmitStatus('error');
    }

    // Success
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black w-full flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Contact Me
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to chat with me? Drop me a message below and I&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gradient-to-br from-blue-500/20 to-purple-600/20 transition-all duration-500 text-white"
          >
            <div className="space-y-6">
              {/* Name */}
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

              {/* Email */}
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

              {/* Message */}
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

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message Via Email</>}
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

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors hover:scale-110 flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </form>

          {/* Profile Image */}
          <div className="hidden lg:block relative h-full">
            <div className="relative aspect-square w-3/4 h-full ml-20 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/main-photo.png" // Replace with your image path
                alt="Profile Image"
                fill
                className="object-fit"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..." // Add your blur placeholder
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
