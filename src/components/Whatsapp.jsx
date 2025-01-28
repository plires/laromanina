import { useState, useEffect } from 'react'
import close from '@/assets/img/close.png'
import whatsapp from '@/assets/img/whatsapp.png'
import { handleWhatsapp } from '@/utils/dataUtils'

import './whatsapp.css'

const Whatsapp = () => {
  useEffect(() => {
    setWhatsappOpen(handleWhatsapp())
  }, [])

  const [whatsappOpen, setWhatsappOpen] = useState(true)

  {
    if (whatsappOpen) {
      return (
        <>
          <section id='seguidor' className='text-center'>
            <button id='cerrar-seguidor' style={{ color: '#000000' }}>
              <img
                className='transition'
                width='20'
                height='20'
                src={close}
                onClick={() => setWhatsappOpen(false)}
                alt='close'
              />
            </button>

            <hr style={{ margin: '10px 0' }} />

            <div className='click-to-call-mobile'>
              <img src={whatsapp} alt='whatsapp' />
            </div>

            <h6>
              <strong>¡CONSULTÁ POR WHATSAPP!</strong>
            </h6>
            <a
              id='whatsapp_desktop'
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-wap btnTagManager'
            >
              CHAT
            </a>
          </section>

          <section id='seguidor-tel' className='text-center'>
            <div className='tex-right'>
              <button id='cerrar-seguidor-tel' style={{ color: '#000000' }}>
                <img
                  className='transition'
                  width='20'
                  height='20'
                  src={close}
                  alt='close mobile'
                  onClick={() => setWhatsappOpen(false)}
                />
              </button>
            </div>

            <a
              id='whatsapp_mobile'
              className='transition btnTagManager'
              href={import.meta.env.VITE_WHATSAPP_LINK}
              target='_blank'
              rel='noopener noreferrer'
            >
              ¡CONSULTÁ POR <br /> WHATSAPP!
            </a>
          </section>
        </>
      )
    } else {
      return null
    }
  }
}
export default Whatsapp
