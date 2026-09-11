import { About } from './components/About'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ServiceBlog } from './components/ServiceBlog'
import { Services } from './components/Services'
import { WhoWeAre } from './components/WhoWeAre'

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <About />
        <Services />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ServiceBlog />
    </div>
  )
}

export default App
