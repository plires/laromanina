import ContentProductos from '@/components/ContentProductos.jsx'
import Features from '@/components/Features.jsx'
import CarruselImagesGallery from '@/components/CarruselImagesGallery.jsx'
import LastCTA from '@/components/LastCTA.jsx'
import Whatsapp from '@/components/Whatsapp'

const Home = () => {
  return (
    <section className='home'>
      <Whatsapp />
      <ContentProductos />
      <Features />
      <CarruselImagesGallery />
      <LastCTA />
    </section>
  )
}

export default Home
