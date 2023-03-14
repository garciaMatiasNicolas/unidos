import { MDBIcon } from "mdb-react-ui-kit"
import logo from '../assets/logo2.png'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-md d-flex justify-content-center w-100 px-4">
        <div className="d-flex justify-content-between w-100">
            <Link to='/' className="navbar-brand">
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <MDBIcon fas icon="bars" />
            </button>
        </div>
        <div className="collapse navbar-collapse" style={{width:'auto',}} id="navbarNavAltMarkup">
            <div className="navbar-nav navLinks w-auto menu">
                <Link to='/nosotros' className="text-decoration-none" ><span className="font-family ref">NOSOTROS</span></Link>
                <Link to='/eventos' className="text-decoration-none" ><span className="font-family ref">EVENTOS</span></Link>
                <Link to='/contacto' className="text-decoration-none" ><span className="font-family ref">CONTACTO</span></Link>
                <a href="#colaboration"><button style={{width:'10rem'}} className='font-family App-btn2'>Como colaborar</button></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar