import Slider from 'react-slick'
import { getImagesGallery, getImageURL } from '@/utils/dataUtils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './carrusel-images-gallery.module.css'

const CarruselImagesGallery = () => {
  const images = getImagesGallery('images')
  const settings = {
    autoplay: true,
    arrows: false,
    className: 'center',
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section
      data-aos='fade-up'
      className={`${styles.CarruselImagesGallery} CarruselImagesGallery`}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Productos para cada necesidad</h2>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {images.map(item => (
          <div key={item.id} className={`${styles.content}`}>
            <picture>
              <source
                srcSet={getImageURL(`galeria/${item.img_src_opt}`)}
                type='image/webp'
              />
              <source
                srcSet={getImageURL(`galeria/${item.img_src}`)}
                type='image/jpg'
              />

              <img
                className='transition img-fluid'
                src={getImageURL(`galeria/${item.img_src}`)}
                alt={item.img_alt}
              />
            </picture>
            <div
              className={`${item.color === 'primary' ? styles.fillPrimary : styles.fillThird}`}
            ></div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
export default CarruselImagesGallery
