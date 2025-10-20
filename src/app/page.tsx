import Navbar from '@/components/ui/Header'
import Hero from '@/components/section/Hero'
import Skills from '@/components/section/Skills'
import Projects from '@/components/section/Projects'
import Footer from '@/components/ui/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}