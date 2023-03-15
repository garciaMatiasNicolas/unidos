import fundacion from '../../assets/fundacion.png'


const Contact = () => {
  return (
    <div className="sectionx2 w-100 d-flex justify-content-center align-items-center" style={{background:'#F3F4F5'}}>
        
        <div className="w-100 px-5 d-flex justify-content-center align-items-center flex-wrap gap-5">
            
            <div>
                <h2 className="font-family fs-1">Contactanos!</h2>
                <div className="mt-3 ps-5">
                    <h3 className='font-family fs-5 text-black'>Nuestro número de WhatsApp</h3>
                    <div className="d-flex justify-content-start gap-2 w-100">
                        <span><i className="fab fa-whatsapp fa-2x"></i></span>
                        <a className='text-decoration-none' href='https://api.whatsapp.com/send/?phone=11 2450-6328'><p className="font-family fs-5 text-primary">+54 9 11 2450-6328</p></a>
                    </div>
                </div>
                <div className="mt-3 ps-5">
                    <h3 className='font-family fs-5 text-black'>Siguenos en Instagram!</h3>
                    <div className="d-flex justify-content-start gap-2 w-100">
                        <span><i className="fab fa-instagram fa-2x"></i></span>
                        <a className='text-decoration-none' href='https://www.instagram.com/unidosporlaalegriaok/'>
                            <p className="font-family fs-5 text-primary">@unidosporlaalegriaok</p>
                        </a>
                    </div>
                </div>
                <div className="mt-3 ps-5">
                    <h3 className='font-family fs-5 text-black'>Nuestro Facebook</h3>
                    <div className="d-flex justify-content-start gap-2 w-100">
                        <span><i className="fab fa-facebook fa-2x"></i></span>
                        <a className='text-decoration-none' href='https://www.facebook.com/profile.php?id=100064631654612'>
                        <p className="font-family fs-5 text-primary">@unidosporlaalegria</p>
                        </a>
                    </div>
                </div>
            </div>

            <img style={{width:'20rem'}} src={fundacion}/>
        </div>

        <svg style={{bottom: '0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,186.7C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default Contact