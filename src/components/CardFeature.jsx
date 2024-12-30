import styles from './card-features.module.css'

import { getImageURL } from '@/utils/dataUtils.js'

const CardFeature = ({ item }) => {
  return (
    <div data-aos='fade-up' className='col-md-4'>
      <div className={`${styles.contentCard}`}>
        <p>{item.title}</p>
        <div className={`${styles.contentImg}`}>
          <img
            className={`img-fluid ${styles.imgProduct}`}
            src={getImageURL(item.img)}
            alt={item.alt}
          />
        </div>
      </div>
    </div>
  )
}
export default CardFeature
