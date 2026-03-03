'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Home, User, Code, Briefcase, FolderRoot, Mail } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode, isClient } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderRoot },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  return (
    <>
      {/* DESKTOP NAVBAR (TOP) */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none hidden md:block">
        <nav className={`mx-auto max-w-5xl transition-all duration-500 pointer-events-auto ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-2xl px-8 py-3' 
            : 'bg-transparent px-4 py-4'
        }`}>
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => scrollToSection('home')}
              className="text-xl font-black cursor-pointer group flex items-center"
            >
              <span className="bg-primary-600 text-white w-8 h-8 flex items-center justify-center rounded-lg mr-2 group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">D</span>
              <span className="text-white">Deska</span>
              <span className="text-primary-500">.dev</span>
            </motion.div>

            <div className="flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="w-px h-6 bg-white/10 mx-2" />
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/5 transition-all"
                aria-label="Toggle dark mode"
              >
                {isClient ? (isDarkMode ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE NAVBAR (BOTTOM DOCK) */}
      <div className="fixed bottom-6 left-0 w-full z-50 px-4 md:hidden">
        <div className="relative mx-auto max-w-sm">
          {/* Mobile Menu Popup (Expanding Upwards) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute bottom-20 left-0 w-full p-2 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-3 gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-white/10 transition-colors group"
                    >
                      <item.icon size={20} className="text-primary-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-tighter">{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Dock Bar */}
          <nav className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => scrollToSection('home')}
              className="p-4 text-primary-500"
            >
              <Home size={24} />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/40 active:scale-90 transition-transform"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-4 text-gray-400"
            >
              {isClient ? (isDarkMode ? <Sun size={24} /> : <Moon size={24} />) : <Moon size={24} />}
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar