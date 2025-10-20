'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronDown, MessageCircle, Download, FileText } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { sendToWhatsApp } from '@/lib/whatsapp'

// ✅ Pindahkan ke luar component
const TYPING_TITLES = ['Frontend Developer', 'React.js Developer', 'Next.js Developer', 'TypeScript Developer']

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Ganti titles jadi TYPING_TITLES
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
    }, isDeleting ? 100 : 150)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting]) // Hapus titles dari dependency

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

  const handleWhatsApp = () => {
    const message = 'Halo! Saya ingin berdiskusi tentang project development.'
    sendToWhatsApp(personalInfo.phone, message)
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub', type: 'link' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', type: 'link' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', type: 'link' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', type: 'whatsapp', action: handleWhatsApp },
    { icon: Download, href: '/files/Deska_Mulyana_CV.pdf', label: 'Download CV', type: 'download', download: 'Deska_Mulyana_CV.pdf' },
    { icon: FileText, href: '/files/Deska_Mulyana_Portfolio.pdf', label: 'Portfolio PDF', type: 'download', download: 'Deska_Mulyana_Portfolio.pdf' }
  ]

  return (
    <section id="home" className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Profile image placeholder */}
        <div className="mb-8 animate-fadeInUp">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-white/20 to-white/10 border-4 border-white/30 flex items-center justify-center text-3xl font-bold shadow-2xl">
            <span className="text-white">DM</span>
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, {`I'm`} <span className="text-yellow-300">{personalInfo.name.split(' ')[0]}</span>
          </h1>
        </div>

        {/* Typing animation */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl h-8 flex items-center justify-center">
            <span className="mr-2">{`I'm`} a</span>
            <span className="text-yellow-300 font-semibold min-w-[250px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="mb-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button 
            onClick={() => sendToWhatsApp(personalInfo.phone, 'Hi! I\'m interested in discussing potential projects and collaboration opportunities.')}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4 mb-16 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          {socialLinks.map((social, index) => (
            social.type === 'whatsapp' ? (
              <button
                key={index}
                onClick={social.action}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </button>
            ) : social.type === 'download' ? (
              <a
                key={index}
                href={social.href}
                download={social.download}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ) : (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            )
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to skills section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero