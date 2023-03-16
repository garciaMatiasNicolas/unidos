import { Link } from 'react-router-dom';
import image3 from '../../assets/unidos-carrousel-4.jpeg';
import image2 from '../../assets/unidos-carrousel-3.jpg';
import image1 from '../../assets/unidos-carrousel-2.jpeg';

const MediaCarrousel = () => {
  return (
   
    <div className="carousel-inner w-100">
        
        <div className="carousel-item carrouselImages w-100" style={{background:`url(${image1})`}}>
          <div className="carrouselMedia px-2">
              <h2 className="text-white text-center font-title">Nuestras actividades</h2>
              <span className="text-white text-center font-span">Podés ver todas las actividades que realizamos en nuestra fundación desde</span><Link to='/nosotros' className='font-span text-white fs-5'>Aquí</Link>
          </div>
        </div>

        <div className="carousel-item carrouselImages w-100" style={{background:`url(${image2})`}}>
          <div className="carrouselMedia px-2">
              <h2 className="text-white text-center font-title">Próximos Eventos</h2>
              <span className="text-white text-center font-span">Entra en nuestra sección de <Link to='/eventos' className='font-span text-white fs-5'>Eventos</Link> y visualiza nuestros anteriores y próximos eventos!</span>
          </div>
        </div>

        <div className="carousel-item active w-100 carrouselImages" style={{background:`url(${image3})`}}>
          <div className="carrouselMedia px-2">
              <h2 className="text-white text-center font-title">Conoce nuestros inicios</h2>
              <span className="text-white text-center font-family fs-5">Descúbrenos como nos formamos hasta el dia de hoy y toda nuestra historia</span>
              <Link to='/nosotros' className='font-span text-white fs-5'>Aquí</Link>
          </div>
        </div>

      </div>
    
  )
}

export default MediaCarrousel