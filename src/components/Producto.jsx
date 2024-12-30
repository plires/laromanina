import TypeEstanteria from '@/components/TypeEstanteria.jsx'
import { scrollToTop, getProducts, getImageURL } from '@/utils/dataUtils.js'
import { useContext } from 'react'
import { StoreContext } from '@/context/store'

import styles from './productos.module.css'

const Producto = () => {
  const products = getProducts('products')
  const { setMessage, textAreaRef } = useContext(StoreContext)

  return (
    <>
      {products.length > 0 ? (
        products.map(product => (
          <div
            key={product.id}
            className={`${styles.content} ${product.column === 'left' ? styles.left : styles.right}`}
          >
            <div className={`${styles.plenoPrimary}`}></div>

            <div className={`${styles.contentImg}`}>
              <picture>
                <source
                  srcSet={getImageURL(product.imgOpt)}
                  type='image/webp'
                />
                <source srcSet={getImageURL(product.img)} type='image/jpg' />
                <img
                  data-aos='fade-up'
                  className={`img-fluid ${styles.imgProduct}`}
                  src={getImageURL(product.img)}
                  alt={product.alt}
                />
              </picture>
            </div>
            <div className={`${styles.contentData}`}>
              <div className={`${styles.contentDataWithColor}`}>
                <h2 data-aos='fade-up'>{product.title}</h2>
                <div
                  data-aos='fade-up'
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>

                {product.extra && <TypeEstanteria />}

                <div
                  data-aos='fade-up'
                  className={`${styles.contentBtnProduct}`}
                >
                  <button
                    onClick={() =>
                      scrollToTop(
                        setMessage,
                        `Necesito mas información sobre ${product.title}`,
                        textAreaRef.current,
                      )
                    }
                    className={`btn btnLanding ${styles.btnProduct}`}
                  >
                    COTIZAR
                  </button>
                </div>
                <div className={`${styles.contentFill}`}></div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p>
                La información no esta disponible en este momento, intente
                nuevamente o{' '}
                <span
                  style={{
                    cursor: 'pointer',
                    'margin-bottom': '30px',
                    display: 'inline-block',
                  }}
                  onClick={() =>
                    scrollToTop(
                      setMessage,
                      'Necesito mas información sobre estanterias metálicas y racks de almacenamiento...',
                      textAreaRef.current,
                    )
                  }
                >
                  solicite ayuda.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Producto
