import Navbar from '@/components/ui/Header'
import Hero from '@/components/section/Hero'
import About from '@/components/section/About'
import Skills from '@/components/section/Skills'
import Projects from '@/components/section/Projects'
import Contact from '@/components/section/contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}