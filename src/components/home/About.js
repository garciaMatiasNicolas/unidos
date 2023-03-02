import { Link } from 'react-router-dom'
import image from '../../assets/logo.jpeg'

const About = () => {
  return (
    <div className='row p-5 w-100 d-flex justify-content-center align-items-start gap-5'>
        <div className='d-flex flex-column justify-content-start align-items-center gap-3 col-6 col-lg-5 column'>
            <h1 className='font-family fs-1 fw-bold align'>¿QUE ES UNIDOS POR LA ALEGRIA?</h1>
            <span className='font-family align'>
                Unidos por la alegria es una fundacion para.... que se dediaca... desde... etc abcdefeefnajfakjnfask sadnasdjaksjd asddsajjasjd ads ajdsnanj
            </span>
            <Link className='link'  to='/nosotros'><button className='font-family App-btn'>Conoce nuestra historia</button></Link>
        </div>

        <div className='col-6 col-lg-5 column d-flex'>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <img className='link' style={{width:'20rem', height:'20rem'}} src={image}/>
            </div>
        </div>
    </div>
  )
}

export default About