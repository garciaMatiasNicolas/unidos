import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter style={{background:'#ff9000'}} className='text-center text-lg-start text-muted pt-5'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h3 className='font-family fs-3 fw-bold mb-4'>UNIDOS POR LA ALEGRIA</h3>
              <p className='font-family fs-6'>Mucha gente pequena, en lugares pequenos, haciendo cosas pequenas, pueden cambiar el mundo..</p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-md-0 mb-4'>
              <h3 className='font-family fs-4 fw-bold mb-4'>LINKS</h3>
                <div className='d-flex flex-column gap-2'>
                  <Link to='/' className='font-family'>Inicio</Link>
                  <Link to='/nosotros' className='font-family'>Nosotros</Link>
                  <Link to='/eventos' className='font-family'>Eventos</Link>
                  <Link to='/contacto' className='font-family'>Contacto</Link>
                </div>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h3 className='font-family fs-4 fw-bold mb-4'>CONTACTO</h3>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='home' className='me-2'/>Buenos Aires, Ezeiza 10012, ARG</p>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='envelope' className='me-3'/>info@example.com</p>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Desarrollado por
        <a className='text-reset fw-bold' href='https://matiasgarcia.vercel.app/'>
          : Matias Garcia
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer