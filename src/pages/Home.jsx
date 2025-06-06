import ContentProductos from '@/components/ContentProductos.jsx'
import Features from '@/components/Features.jsx'
import CarruselImagesGallery from '@/components/CarruselImagesGallery.jsx'
import CarruselClientesGallery from '@/components/CarruselClientesGallery.jsx'
import LastCTA from '@/components/LastCTA.jsx'
import Header from '@/components/Header'
import Whatsapp from '@/components/Whatsapp'

const Home = () => {
  return (
    <section className='home'>
      <Whatsapp />
      <Header />
      <ContentProductos />
      <Features />
      <CarruselClientesGallery />
      <CarruselImagesGallery />
      <LastCTA />
    </section>
  )
}

export default Home
