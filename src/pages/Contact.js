import Form from "../components/contact/Form"
import Header from "../components/contact/HeaderSections"
import Navbar from "../components/Navbar"

const data = {
  image: "https://pymstatic.com/120528/discapacidad-intelectual-psicologo.jpg",
  title: "Contactate con nosotros!",
  text: "Contacta con nosotros para ayudarnos desde lo que puedas! Completa este formulario para enviarnos un correo o utiliza algun otro canal de comunicacion que este en el sitio que te quede mas comodo!"
}

const Contact = () => {
  
  return (
    <div>
      <Navbar/>
      <Header image={data.image} title={data.title} text={data.text}/>
      <section className="d-flex justify-content-center align-items-center gap-5 flex-column">
        <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
          <h3 className="font-family fs-6 text-center">¿Tenes dudas?</h3>
          <h3 className="font-family fs-1 text-center">Envianos tu consulta a nuestro mail de contacto!</h3>
        </div>
        <Form/>
      </section>
    </div>
  )
}

export default Contact