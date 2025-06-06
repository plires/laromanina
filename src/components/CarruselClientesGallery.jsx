import Slider from 'react-slick'
import { getClientsGallery, getImageURL } from '@/utils/dataUtils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './carrusel-clientes-gallery.module.css'

const CarruselClientsGallery = () => {
  const clients = getClientsGallery('clients')
  const settings = {
    autoplay: true,
    arrows: false,
    className: 'center',
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <section
      data-aos='fade-up'
      className={`${styles.CarruselClientsGallery} CarruselClientsGallery`}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Quienes confían en nosotros</h2>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {clients.map(item => (
          <div key={item.id} className={`${styles.content}`}>
            <img
              className='transition img-fluid'
              src={getImageURL(`logos/${item.img_src}`)}
              alt={item.img_alt}
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}
export default CarruselClientsGallery
