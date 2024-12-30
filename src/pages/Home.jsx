import ContentProductos from '@/components/ContentProductos.jsx'
import Features from '@/components/Features.jsx'
import CarruselImagesGallery from '@/components/CarruselImagesGallery.jsx'
import LastCTA from '@/components/LastCTA.jsx'

const Home = () => {
  return (
    <section className='home'>
      <ContentProductos />
      <Features />
      <CarruselImagesGallery />
      <LastCTA />
    </section>
  )
}

export default Home
