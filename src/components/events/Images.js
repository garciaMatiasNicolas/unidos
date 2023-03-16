import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';


const Images = (props) => {
  return (
    <MDBCarousel showControls dealy={4000}>
        <MDBCarouselItem className='w-100 d-block' itemId={1} src={props.images[0]} />
        <MDBCarouselItem className='w-100 d-block' itemId={2} src={props.images[1]} />
        <MDBCarouselItem className='w-100 d-block' itemId={3} src={props.images[2]} />
        <MDBCarouselItem className='w-100 d-block' itemId={4} src={props.images[3]} />
    </MDBCarousel>
  )
}

export default Images