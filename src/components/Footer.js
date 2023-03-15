import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter style={{background:'#ff9000'}} className='text-center text-lg-start text-muted pt-5'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h3 className='font-family fs-3 fw-bold mb-4'>UNIDOS POR LA ALEGRÍA</h3>
              <p className='font-family fs-6'>Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, pueden cambiar el mundo..</p>
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

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 w-auto'>
            <h3 className='font-family fs-4 fw-bold mb-4'>CONTACTO</h3>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='home' className='me-2'/>Buenos Aires, Ezeiza 10012, ARG</p>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='envelope' className='me-3'/>unidosporlaalegria2021@gmail.com</p>
              <p className='font-family fs-6'><MDBIcon color='secondary' icon='phone' className='me-3' /> +54 9 11 2450-6328</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='font-family text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Desarrollado por:
        <a className='font-family fw-bold' href='https://matiasgarcia.vercel.app/'>
          Matias Garcia
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer