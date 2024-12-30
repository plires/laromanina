import logoOpt from '@/assets/img/logo.webp'
import logo from '@/assets/img/logo.png'
import Formulario from '@/components/Formulario'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className='container-fluid'>
        <div className='row'>
          <div className={`col-md-6 ${styles.contentData}`}>
            <div data-aos='fade-up' className={`${styles.logo}`}>
              <picture>
                <source srcSet={logoOpt} type='image/webp' />
                <source srcSet={logo} type='image/jpg' />

                <img
                  className='img-fluid'
                  src={logo}
                  alt='logo establecimiento metalurgico la romanina'
                />
              </picture>
            </div>
            <h1 data-aos='fade-up'>
              Soluciones de organización. <br />
              <span>Capacidad, calidad y seguridad.</span>
            </h1>
          </div>
          <div className={`col-md-6 ${styles.contentForm}`}>
            <Formulario />
          </div>
        </div>
      </div>
      <div className={`${styles.overlay}`}></div>
    </header>
  )
}

export default Header
