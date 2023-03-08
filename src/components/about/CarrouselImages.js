import {MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';

const CarrouselImages = () => {
  return (
    <MDBCarousel className='w-100 rounded' showControls>
        <MDBCarouselItem
        className='w-100 d-block rounded'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
        />
        <MDBCarouselItem
        className='w-100 d-block rounded'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
        />
        <MDBCarouselItem
        className='w-100 d-block rounded'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
        />
    </MDBCarousel>
  )
}

export default CarrouselImages