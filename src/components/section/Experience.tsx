'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Professional <span className="text-gradient">Experience</span></h3>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0 pb-12 last:pb-0 group"
            >
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 md:-translate-x-px group-last:bottom-auto group-last:h-8" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2 h-2 rounded-full bg-primary-500 ring-4 ring-primary-500/20 group-hover:scale-150 transition-transform duration-300" />

              <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-[45%] ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="p-6 rounded-3xl dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/30 transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-3 text-primary-500 mb-2">
                      <Briefcase size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">{exp.type}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                      {exp.title}
                    </h4>
                    
                    <p className="text-gray-900 dark:text-gray-100 font-semibold mb-3">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-bold bg-primary-500/5 text-primary-500 rounded-lg border border-primary-500/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Space for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience