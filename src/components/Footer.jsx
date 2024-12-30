import logoFooter from '@/assets/img/logo-footer.png'
import logoFooterOpt from '@/assets/img/logo-footer.webp'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <picture>
            <source srcSet={logoFooterOpt} type='image/webp' />
            <source srcSet={logoFooter} type='image/png' />

            <img
              className={`transition img-fluid ${styles.img_accesorios}`}
              src={logoFooter}
              alt='logo la romaniona footer'
            />
          </picture>
        </div>
      </div>
    </footer>
  )
}

export default Footer
