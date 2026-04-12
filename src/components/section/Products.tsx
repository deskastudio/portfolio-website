'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { Github, ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

type Project = (typeof projects)[number] & { badges?: string[] }

const Products = () => {
  const products = (projects as Project[]).filter(p => p.badges?.includes('SaaS Product'))

  if (products.length === 0) return null

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3 flex items-center gap-2">
                <Sparkles size={14} /> Products
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold dark:text-white">
                SaaS <span className="text-gradient">I Built</span>
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Independent SaaS products I designed and shipped end-to-end — not client work.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-primary-500/20 dark:border-primary-500/30 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.15)]"
            >
              {/* Premium top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-fuchsia-500 to-secondary-500" />

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.badges?.map(badge => (
                      <span
                        key={badge}
                        className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                          badge === 'AI-Powered'
                            ? 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30'
                            : badge === 'SaaS Product'
                            ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-500/30'
                            : badge === 'Enterprise'
                            ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                            : 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/30'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                    {product.liveUrl && product.liveUrl !== '#' && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl font-bold dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {product.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-semibold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                  <div className="flex gap-4">
                    {product.githubUrl && product.githubUrl !== '#' && (
                      <a
                        href={product.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {product.liveUrl && product.liveUrl !== '#' && (
                      <a
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  {product.liveUrl && product.liveUrl !== '#' && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors group/link"
                    >
                      Visit Product <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-500/5 blur-[120px] pointer-events-none" />
    </section>
  )
}

export default Products
