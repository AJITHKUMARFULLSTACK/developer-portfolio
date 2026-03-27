import { About } from './components/About'
import { Contact } from './components/Contact'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { WhyMe } from './components/WhyMe'

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Services />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
