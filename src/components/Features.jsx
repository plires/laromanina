import { getFeatures } from '@/utils/dataUtils.js'
import CardFeature from '@/components/CardFeature.jsx'

import styles from './features.module.css'

const Features = () => {
  const features = getFeatures('features')
  return (
    <>
      {features.length > 0 ? (
        <section className={`container ${styles.features}`}>
          <div className='row'>
            <div className='col-md-12'>
              <h2 data-aos='fade-up'>¿Qué nos diferencia?</h2>
            </div>
          </div>

          <div className='row'>
            {features.map(feature => (
              <CardFeature key={feature.id} item={feature} />
            ))}
          </div>
        </section>
      ) : (
        <p>no hay</p>
      )}
    </>
  )
}

export default Features
