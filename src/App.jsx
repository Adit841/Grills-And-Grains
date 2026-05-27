import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Categories from './sections/Categories'
import Menu from './sections/Menu'
import Addons from './sections/Addons'
import WhyUs from './sections/WhyUs'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-cream antialiased">
      <Navbar />
      <main>
        <Hero />  
        <Menu />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
