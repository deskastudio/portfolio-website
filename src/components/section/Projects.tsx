'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Selected <span className="text-gradient">Projects</span></h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              A collection of production-grade systems, AI-powered platforms, and high-performance applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]"
            >
              {/* Project Image Placeholder / Decorative background */}
              <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Visual badge for category */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Tech Badges on Image */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[10px] font-bold bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-2xl font-bold dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors group/link"
                  >
                    View Project <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/deskastudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
          >
            See More on GitHub <Github size={20} />
          </a>
        </motion.div>
      </div>

      {/* Background element */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary-500/5 blur-[120px] pointer-events-none" />
    </section>
  )
}

export default Projects