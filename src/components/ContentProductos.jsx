import Producto from '@/components/Producto.jsx'

const ContentProductos = () => {
  return (
    <section className='productos'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 data-aos='fade-up'>Lo mejor en almacenamiento</h2>
          </div>
        </div>
      </div>

      <Producto />
    </section>
  )
}
export default ContentProductos
