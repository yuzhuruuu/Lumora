import { LanguageProvider } from './context/LanguageContext'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Services from './components/Services'
import Solutions from './components/Solutions'
import WhyLumora from './components/WhyLumora'
import Pricing  from './components/Pricing'
import Process  from './components/Process'
import Vision   from './components/Vision'
import Values   from './components/Values'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <WhyLumora />
        <Pricing />
        <Process />
        <Vision />
        <Values />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
