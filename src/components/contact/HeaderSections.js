

const Header = (props) => {
  return (
    <div className="w-100 headerImages sectionx" style={{background: `url(${props.image})`}}>
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-start" style={{ maxWidth:'40rem'}}>
            <h1 className="font-family fs-1 text-white mb-3 w-auto px-5">{props.title}</h1>
            <span className="font-family text-white fs-6 px-5 w-auto">{props.text}</span>
        </div>

    <svg style={{bottom: '0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,186.7C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        
    </div>
  )
}

export default Header