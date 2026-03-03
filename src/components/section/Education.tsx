'use client'

import { education } from '@/lib/data'
import { GraduationCap, BookOpen, Trophy, Lightbulb } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">Academic</h2>
          <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Educational <span className="text-gradient">Background</span></h3>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-8 md:p-12 rounded-[2.5rem] dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 rounded-3xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <GraduationCap size={40} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold dark:text-white mb-1">{education.degree}</h4>
                    <p className="text-primary-500 font-bold text-lg">{education.university}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest border border-green-500/20">
                      {education.status}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest border border-gray-200 dark:border-white/10">
                      {education.period}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-yellow-500">
                      <Trophy size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">GPA Achievement</span>
                    </div>
                    <p className="text-xl font-black dark:text-white">{education.gpa}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-primary-500">
                      <Lightbulb size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest">Final Project</span>
                    </div>
                    <p className="text-sm dark:text-gray-300 font-medium leading-relaxed italic">&quot;{education.finalProject}&quot;</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen size={20} className="text-primary-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm font-semibold border border-gray-100 dark:border-white/10 hover:border-primary-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education