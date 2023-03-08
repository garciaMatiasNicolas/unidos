import Container1 from '../components/about/Container1';
import Header from '../components/contact/HeaderSections';
import Container2 from '../components/about/Container2';
import CarrouselImages from '../components/about/CarrouselImages';
import Donation from '../components/Donation';
import image3 from '../assets/unidos-history-1.jpg';
import image2 from '../assets/unidos-history-2.jpg';
import image1 from '../assets/unidos-history-4.jpg';
import image4 from '../assets/unidos-history-5.jpeg';
import image5 from '../assets/unidos-history-6.jpg';

const data = {
  image: "https://www.fundacionmapfre.org/media/accion-social/proyectos/internacionales/venezuela/finalizados/alimentacion-discapacidad-1194x585-1.jpg",
  title: "Descubre nuestra historia",
  text: "En esta seccion encontraras toda la historia de nuestra fundacion. Desde nuestros comienzos alla por 2010 hasta la actualidad"
}

const history = [
  {
    title: "Titulo 1",
    text: "La Fundación Benéfica fue fundada en el año 2000 por un grupo de empresarios emprendedores para ayudar a personas necesitadas en todo el mundo. Se trata de una organización sin fines de lucro que ofrece apoyo financiero y servicios de asesoramiento, así como ayuda a personas afectadas por desastres naturales, emergencias y situaciones de crisis.",
    image: "image1"
  },
  {
    title: "Titulo 2",
    text: "La Fundación Benéfica fue fundada en el año 2000 por un grupo de empresarios emprendedores para ayudar a personas necesitadas en todo el mundo. Se trata de una organización sin fines de lucro que ofrece apoyo financiero y servicios de asesoramiento, así como ayuda a personas afectadas por desastres naturales, emergencias y situaciones de crisis.",
    image: "image2"
  },
]



const AboutUs =  () => {

  return (
    <div className='d-flex flex-column'>
      <Header image={image5} title={data.title} text={data.text}/> 
      <Container1 image={image1} title={history[0].title} text={history[0].text}/>
      <Container2 image={image2} title={history[1].title} text={history[1].text}/>
      <Container1 image={image3} title={history[0].title} text={history[0].text}/>
      <Container2 image={image4} title={history[1].title} text={history[1].text}/>
      <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
        <h3 className="font-family fs-1 text-center">Nuestra galeria de imagenes</h3>
      </div>
      <section style={{alignSelf:'center', maxWidth:"70rem"}} className='d-flex justify-content-center align-items-center flex-column shadow p-2 mb-5 bg-body rounded m-5 w-75'>
        <CarrouselImages/>
      </section>
      <section className='w-100 d-flex justify-content-center align-items-center'>
       <Donation/>
      </section>
    </div>
  )
}

export default AboutUs