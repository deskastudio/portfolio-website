import Navbar from '@/components/ui/Header'
import Hero from '@/components/section/Hero'
import About from '@/components/section/About'
import Skills from '@/components/section/Skills'
import Experience from '@/components/section/Experience'
import Education from '@/components/section/Education'
import Certifications from '@/components/section/Certifications'
import Projects from '@/components/section/Projects'
import Contact from '@/components/section/Contact'
import Footer from '@/components/ui/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
