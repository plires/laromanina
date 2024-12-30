import { scrollToTop } from '@/utils/dataUtils.js'
import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import styles from './last-cta.module.css'

const LastCTA = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)

  return (
    <section className={`${styles.lastCTA} container`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2>Si te interesa obtener más información</h2>
          <div className={`${styles.contentBtnProduct}`}>
            <button
              onClick={() =>
                scrollToTop(
                  setMessage,
                  'Necesito mas información sobre estanterías metálicas y racks de almacenamiento...',
                  textAreaRef.current,
                )
              }
              className={`btn btnLanding ${styles.btnProduct}`}
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LastCTA
