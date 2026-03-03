'use client'

import { motion } from 'framer-motion'
import { personalInfo, stats } from '@/lib/data'
import { MapPin, GraduationCap, Calendar, Trophy } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-square max-w-md mx-auto">
              {/* Profile placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-secondary-600/40 flex items-center justify-center text-8xl font-black text-white/20 select-none">
                DM
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
            </div>

            {/* Floating Info Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:right-0 p-4 rounded-2xl dark-glass z-20 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">GPA</p>
                  <p className="text-sm font-bold dark:text-white">{personalInfo.gpa} / 4.00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 md:left-0 p-4 rounded-2xl dark-glass z-20 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold dark:text-white">Tangerang, ID</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <AnimatedSection>
              <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">Building the <span className="text-gradient">Future</span> with Code.</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {personalInfo.description}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                >
                  <p className="text-2xl md:text-3xl font-black text-primary-500 mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <GraduationCap className="text-primary-500" size={20} />
                <span>{personalInfo.university} (Class of {personalInfo.graduated})</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <Calendar className="text-primary-500" size={20} />
                <span>Available for Full-time & Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About