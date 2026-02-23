import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Experience from './components/Experience'
import Menu from './components/Menu'
import WhyTarrace from './components/WhyTarrace'
import InstagramWall from './components/InstagramWall'
import ReservationCTA from './components/ReservationCTA'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div style={{ backgroundColor: '#0B1B2B', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <SocialProof />
      <Experience />
      <Menu />
      <WhyTarrace />
      <InstagramWall />
      <ReservationCTA />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
