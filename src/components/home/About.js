import { Link } from 'react-router-dom';
import image from '../../assets/unidos-1.jpg';

const About = () => {
  return (
    <div className='row p-5 w-100 d-flex justify-content-center align-items-start gap-5'>
        <div className='d-flex flex-column justify-content-start align-items-center gap-3 col-6 col-lg-5 column'>
            <h1 className='font-family fs-1 fw-bold align'>¿QUÉ ES UNIDOS POR LA ALEGRÍA?</h1>
            <span className='font-family align'>
            Somos un equipo interdisciplinario de profesionales y artistas, que con honestidad profesional, perseverancia, competencia e idoneidad, trabajamos con las personas con discapacidad intelectual en su inclusión social y/o laboral. Contamos con un Consejo de Administración que es el máximo órgano de gobierno de la Asociación. Ellos cuentan con experiencia en la temática, y competencias de gerenciamiento y gestión. Particularmente Debora Ferrilli fue la fundadora de Unidos; y el resto de los miembros acompañan a la organización desde sus comienzos, mientras se siguen sumando profesionales con trayectoria y compromiso.
            </span>
            <Link className='link'  to='/nosotros'><button className='font-family App-btn'>Conoce nuestra historia</button></Link>
        </div>

        <div className='col-6 col-lg-5 column d-flex'>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <img className='link h-100 w-100' style={{borderRadius:'10px'}} src={image}/>
            </div>
        </div>
    </div>
  )
}

export default About