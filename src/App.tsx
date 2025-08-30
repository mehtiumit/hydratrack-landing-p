import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppScreenshots from '@/components/AppScreenshots'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AppScreenshots />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App