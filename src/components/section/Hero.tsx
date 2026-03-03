'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Download, FileText, ExternalLink, Sparkles } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const TYPING_TITLES = ['Software Engineer', 'AI Engineer', 'Full-Stack Developer', 'DevOps Engineer']

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentTitle = TYPING_TITLES[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % TYPING_TITLES.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Download, href: '/files/CV_Deska Mulyana_(SE)(EN).pdf', label: 'CV', download: 'CV_Deska_Mulyana_SE.pdf' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Intense Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary-500/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary-500/20 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="inline-block mb-8">
          <div className="px-5 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-md text-primary-400 text-sm font-bold tracking-widest flex items-center gap-2">
            <Sparkles size={16} className="text-accent-500" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-white">ENGINEERING</span>
          <br />
          <span className="text-gradient">SMART SOLUTIONS.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-xl md:text-3xl text-white font-bold">
              <span className="text-gray-500 font-medium">I am a</span> {displayText}
              <span className="inline-block w-[3px] h-8 bg-accent-500 ml-2 animate-pulse" />
            </p>
          </div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12 font-medium"
        >
          {personalInfo.description.split('.')[0]}. Specialized in <span className="text-white">Next.js</span>, <span className="text-white">AI Systems</span>, and <span className="text-white">Cloud Infrastructure</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW PROJECTS <ExternalLink size={20} />
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-10 py-5 border-2 border-white/10 dark:bg-white/5 backdrop-blur-md dark:text-white font-black rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            GET IN TOUCH
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center gap-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              download={link.download}
              target={link.download ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 transform hover:-translate-y-2 group"
              aria-label={link.label}
            >
              <link.icon size={26} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-accent-500 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero