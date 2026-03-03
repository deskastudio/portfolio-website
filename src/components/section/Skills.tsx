'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  BrainCircuit, 
  Settings2, 
  Wrench 
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const iconMap: Record<string, any> = {
  languages: Code2,
  backend: Server,
  frontend: Layout,
  database: Database,
  ai: BrainCircuit,
  devops: Settings2,
  tools: Wrench
}

const colorMap: Record<string, string> = {
  languages: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  backend: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  frontend: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  database: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  ai: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  devops: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  tools: 'text-gray-400 bg-gray-500/10 border-gray-500/20'
}

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-500 font-black mb-3">EXPERTISE</h2>
          <h3 className="text-5xl md:text-7xl font-black dark:text-white">TECHNICAL <span className="text-gradient">SKILLSET</span></h3>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Harnessing cutting-edge technologies to build scalable, high-performance digital solutions.
          </p>
        </AnimatedSection>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.id] || Code2
            const colorClass = colorMap[category.id] || colorMap.languages
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group p-8 rounded-[2rem] dark:bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] relative overflow-hidden"
              >
                {/* Decoration */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 ${colorClass.split(' ')[1]}`} />

                <div className="flex items-center gap-5 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${colorClass} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black dark:text-white tracking-tight">{category.label}</h4>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm font-bold bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-all hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-secondary-500/10 blur-[150px] pointer-events-none" />
    </section>
  )
}

export default Skills