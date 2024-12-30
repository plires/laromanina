import { getTypesEstanterias, getImageURL } from '@/utils/dataUtils.js'

import styles from './type-estanterias.module.css'

const TypeEstanteria = () => {
  const typeEstanterias = getTypesEstanterias('typesEstanterias')

  return (
    <div data-aos='fade-up' className={`${styles.contentTipoEstanterias}`}>
      {typeEstanterias.length > 0
        ? typeEstanterias.map(typeEst => (
            <div key={typeEst.id} className={`${styles.tipoEstanteria}`}>
              <picture>
                <source
                  srcSet={getImageURL(typeEst.imgOpt)}
                  type='image/webp'
                />
                <source srcSet={getImageURL(typeEst.img)} type='image/jpg' />
                <img
                  className={`img-fluid`}
                  src={getImageURL(typeEst.img)}
                  alt={typeEst.alt}
                />
              </picture>
              <h4>{typeEst.title}</h4>
            </div>
          ))
        : ''}
    </div>
  )
}

export default TypeEstanteria
