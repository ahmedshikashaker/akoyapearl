import { Header, Footer } from '@/components/layout'
import { 
  Hero, 
  Services, 
  WhyUs, 
  Process, 
  Testimonials, 
  Contact,
  Stats,
  Clients
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
