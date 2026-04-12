'use client'

import { motion } from 'framer-motion'
import { Github, Wrench } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const OpenSource = () => {
  return (
    <section id="open-source" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3 flex items-center gap-2">
                <Github size={14} /> Open Source
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold dark:text-white">
                Free <span className="text-gradient">Tools</span>
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Small open-source utilities and tools I&apos;m building for the developer community.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-dashed border-gray-300 dark:border-white/10 bg-gradient-to-br from-gray-50/50 to-transparent dark:from-white/5 dark:to-transparent p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-500/10 text-primary-500 mb-6">
            <Wrench size={28} />
          </div>
          <h4 className="text-2xl font-bold dark:text-white mb-3">Coming Soon</h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
            I&apos;m working on a few open-source utilities to share with the community.
            Follow my GitHub to be notified when the first tools go live.
          </p>
          <a
            href="https://github.com/deskastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity"
          >
            <Github size={18} /> Follow on GitHub
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-500/5 blur-[120px] pointer-events-none" />
    </section>
  )
}

export default OpenSource
