import { MDBRipple } from 'mdb-react-ui-kit';
import Gallery from './Gallery';

const styles = {maxWidth: "1200px"}

const ContainerEvents = (props) => {

  return (
    <div className="w-100 d-flex justify-content-center align-items-start gap-5 pb-4 border-bottom flex-wrap px-5" style={styles}>
        
        <MDBRipple className='bg-image hover-overlay shadow-1-strong rounded' rippleTag='div' rippleColor='light'>
          <img style={{maxWidth:'300px'}} src={props.image} className='w-auto' />
          <a>
            <div className='mask d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.384)' }}>
            <button type="button" style={{background:'transparent'}} className="border border-0 font-family text-white fs-3" data-bs-toggle="modal" data-bs-target={"#" + props.id}>
              Ver fotos
            </button>
            </div>
          </a>
        </MDBRipple>

        <Gallery images={props.images} id={props.id} title={props.title}/>        

        <div className="events d-flex flex-column justify-content-between align-items-start">
            <div>
                <h2 className='font-family fs-1'>{props.title}</h2>
                <p className='font-family mt-3 ms-1'>{props.text}</p>
            </div>

            <span className='font family fs-6 text-primary'>{`Fecha: ${props.date}`}</span>
        </div>

    </div>
  )
}

export default ContainerEvents