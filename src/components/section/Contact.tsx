'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { sendToWhatsApp } from '@/lib/whatsapp'
import AnimatedSection from '@/components/ui/AnimatedSection'

const Contact = () => {
  const handleWhatsApp = () => {
    const message = 'Halo Deska! Saya ingin berdiskusi tentang project development.'
    sendToWhatsApp(personalInfo.phone, message)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary-500 font-bold mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold dark:text-white">Let&apos;s Work <span className="text-gradient">Together</span></h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new opportunities.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-3xl dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-lg font-semibold dark:text-white group-hover:text-primary-500 transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full flex items-center justify-center gap-3 p-6 rounded-3xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-bold hover:bg-green-500 hover:text-white transition-all group"
            >
              <MessageSquare size={24} />
              <span>Chat on WhatsApp</span>
            </motion.button>
          </div>

          {/* Quick Form Placeholder / CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] dark:bg-primary-600 bg-gray-900 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-3xl font-black mb-4 leading-tight">Ready to start your next big project?</h4>
                <p className="text-white/80 mb-8 leading-relaxed">
                  I specialize in building scalable web systems and AI integrations. Let&apos;s build something amazing together.
                </p>
              </div>
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-3 w-full py-6 rounded-2xl bg-white text-gray-900 font-black hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a Conversation <Send size={20} />
              </a>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact