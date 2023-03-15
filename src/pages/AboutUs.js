import Container1 from '../components/about/Container1';
import Header from '../components/contact/HeaderSections';
import Container2 from '../components/about/Container2';
import Donation from '../components/Donation';
import image3 from '../assets/unidos-formacion.jpeg';
import image2 from '../assets/unidos-ocio.jpeg';
import image1 from '../assets/unidos-talleres.jpeg';
import image4 from '../assets/unidos-arte.jpeg';
import image5 from '../assets/unidos-history-6.jpg';
import image6 from '../assets/unidos-deporte.jpg';
import image7 from '../assets/logo.jpeg';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';


const data = {
  image: "https://www.fundacionmapfre.org/media/accion-social/proyectos/internacionales/venezuela/finalizados/alimentacion-discapacidad-1194x585-1.jpg",
  title: "Descubre nuestra historia y actividades",
  text: "En esta seccion encontraras toda la historia de nuestra fundacion. Tambien podras visualizar nuestras diferentes actividades"
}

const history = [
  {
    text: "Mediados del año 2013, mujeres que trabajan en un hospital, mujeres que sobrellevan la discapacidad de hijos, hijas, hermanos, familiares y que saben que hay derechos que no se cumplen. Casi diez años de esos encuentros, encuentros en los jardines, encuentros que determinan, que animan, que impulsan a crear esta asociación. Nos unía la pasión y el querer cambiar, cambiar algunas cosas, aportar desde nuestro lugar de trabajadoras de salud, soluciones a esas necesidades específicas y no cubiertas. Necesidad de contención, de escucha, de promoción de derechos, de atención. Asi nace Unidos por la alegria hasta el dia de hoy..",
  },
  {
    title: "ESPARCIMIENTO",
    text: " Las personas con discapacidad pueden encontrar muchos beneficios en las actividades de ocio, tanto en el plano físico como en el psicológico. Para facilitar el disfrute del tiempo libre, ofrecemos un servicio de ocio que sirve como lugar de encuentro para que personas con discapacidad se relacionen bajo principios de inclusión social. Por eso, hemos realizado las salidas recreativas a  diferentes lugares como ser teatro, estadios de futbol y se han realizado viajes a san clemente y Cordoba, entre otros.",
  },
  {
    title: "TALLERES",
    text: " Para que todas las personas puedan realizar actividades de acuerdo a sus gustos, creamos programas de ocio compartido en función de la edad, intereses y vínculos de amistad de los participantes, que mantienen el poder de decisión sobre las actividades que quieren realizar. Adicionalmente, ofertamos actividades como bellas artes, deporte, teatro y expresión corporal, queremos incorporar taller de radio y otros.",
  },
  {
    title: "FORMACION PARA LA AUTONOMIA",
    text: "Fomentamos el desarrollo de habilidades sociales y cognitivas, para mejorar la autonomía, la vida en el hogar y la vida en comunidad, favoreciendo el acceso al conocimiento: de sus derechos, a la vida afectiva y el ejercicio de sus sexualidades.",
  },
  {
    title: "ARTE",
    text: "Tenemos como pilares: el juego, la creatividad, y la imaginación. Nuestro objetivo es que los, las jóvenes y las producciones artísticas circulen en espacios convencionales e inclusivos, por ejemplo, en teatros, ferias, festivales, galerías de arte, etc.",
  },
  {
    title: "DEPORTE",
    text: "El deporte entendido desde el trabajo en equipo, busqueda de objetivos en comun y cumplimiento de metas propuestas para tambien llevarlo a la vida cotidiana. En el Club de deportes entendemos la importancia de ejercitarse y entrenarse deportivamente, adquirir hábitos saludables, conformar equipos y participar en competencias y torneos.",
  },
]

const AboutUs =  () => {

  return (
    <div className='d-flex flex-column'>
      <Navbar/>

      <Header image={image5} title={data.title} text={data.text}/> 

      <section>    

        <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
          <h3 className="font-family fs-6 text-center">Conoce mas sobre nuestra fundacion!</h3>
          <h3 style={{fontSize:'3.5rem'}} className="font-family text-center">¿Quienes somos?</h3>
        </div>

        <Container1 image={image7} text={history[0].text}/>

      </section>

      <section className='mt-5 d-flex flex-column justify-content-center align-items-start gap-5'>
        
        <div style={{alignSelf:'center'}} className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
          <h3 className="font-family fs-6 text-center">Conoce mas sobre nuestras acrividades</h3>
          <h3 style={{fontSize:'3.5rem'}} className="font-family text-center">¿Que actividades realizamos?</h3>
        </div>

        <Container2  image={image2} title={history[1].title} text={history[1].text}/>

        <Container1 image={image1} title={history[2].title} text={history[2].text}/>
        
        <Container2 image={image3} title={history[3].title} text={history[3].text}/>

        <Container1 image={image4} title={history[4].title} text={history[4].text}/>

        <Container2 image={image6} title={history[5].title} text={history[5].text}/>

      </section>


      <section className='w-100 d-flex justify-content-center align-items-center mt-5'>
       <Donation/>
       <Modal/>
      </section>
    </div>
  )
}

export default AboutUs