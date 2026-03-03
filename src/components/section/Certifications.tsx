'use client'

import { certifications } from '@/lib/data'
import { Award, ShieldCheck } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Professional <span className="text-gradient">Certifications</span></h3>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-3xl dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors truncate">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/5 blur-[120px] pointer-events-none" />
    </section>
  )
}

export default Certifications