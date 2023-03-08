import image1 from '../../assets/unidos-history-2.jpg'
import image2 from '../../assets/unidos-events-1.jpg'
import image3 from '../../assets/unidos-events-2.jpg'

const EventsCards = () => {
  return (
    <div className="w-100 py-5 sectionx" style={{background:'#ff9000'}}>
        
        <svg style={{bottom: '0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,186.7C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        
        <h2 className="font-family text-white fs-1 mb-5 ms-5">Eventos recientes</h2>
        
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 w-100 px-1">
            <div className="card" style={{width:'23rem'}}>
                <img src={image1} className="card-img-top w-100" style={{maxHeight:"12.8rem"}} alt="..."/>
                <div className="card-body">
                    <h2 className="font-family fs-3">Card title</h2>
                    <p className="font-family text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{width:'23rem'}}>
                <img src={image2} style={{maxHeight:"12.8rem"}} className="card-img-top w-100" alt="..."/>
                <div className="card-body">
                    <h2 className="font-family fs-3">Card title</h2>
                    <p className="font-family text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{width:'23rem'}}>
                <img src={image3} className="card-img-top w-100" style={{maxHeight:"12.8rem"}} alt="..."/>
                <div className="card-body">
                    <h2 className="font-family fs-3">Card title</h2>
                    <p className="font-family text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsCards