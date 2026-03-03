'use client'

import { personalInfo } from '@/lib/data'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-20 overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div 
              onClick={scrollToTop}
              className="text-2xl font-black cursor-pointer group flex items-center"
            >
              <span className="bg-primary-600 text-white w-10 h-10 flex items-center justify-center rounded-xl mr-3 group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">D</span>
              <span className="text-gray-900 dark:text-white">Deska</span>
              <span className="text-primary-500">.dev</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Software Engineer & AI Engineer focused on building production-grade systems and intuitive digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl dark:bg-white/5 bg-gray-100 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-white hover:border-primary-500/50 border border-transparent transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Navigation</h3>
            <nav className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary-500 transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Contact</h3>
            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 text-sm">
              <p className="flex items-center gap-2 hover:text-primary-500 transition-colors cursor-pointer">
                <Mail size={16} /> {personalInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <ArrowUp size={16} className="rotate-45" /> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>using Next.js & Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group p-4 rounded-2xl dark:bg-white/5 bg-gray-100 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-white transition-all shadow-xl shadow-black/5"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
    </footer>
  )
}

export default Footer