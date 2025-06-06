import Producto from '@/components/Producto.jsx'

const ContentProductos = () => {
  return (
    <section className='productos'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-10 offset-sm-1'>
            <h2 data-aos='fade-up'>
              Tu aliado en soluciones de almacenamiento industrial
            </h2>
          </div>
        </div>
      </div>

      <Producto />
    </section>
  )
}
export default ContentProductos
