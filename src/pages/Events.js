import Header from '../components/contact/HeaderSections.js';
import ContainerEvents from '../components/events/ContainerEvents';
import event1 from '../assets/unidos-history-1.jpg';
import event2 from '../assets/unidos-history-4.jpg';
import event3 from '../assets/unidos-gallery-1.jpeg';
import event4 from '../assets/unidos-events-4.jpeg';
import event5 from '../assets/unidos-cards-1.jfif'
import header from '../assets/unidos-colaboration-1.jpg';
import Navbar from '../components/Navbar.js';


const data = {
  title: "Conoce nuestros proximos eventos!",
  text: "En esta seccion podras previsualizar eventos anteriores como asi tambien nuestros proximos eventos!"
}

const events = [
  {
    title:"Nuestra Obra de teatro",
    text:"El Teatro comunitario 25 de Mayo de los villuqeros de la ciudad de Buenos Aires fue el escenario de la última obra de teatro realizada por los chicos.  La puesta en escena contó con el talento de ellos, y fue dirigida por Liliana Vazquez. El día de la obra fue un gran éxito, el teatro estaba repleto de familiares y amigos que aplaudieron y vitorearon a los niños. La obra fue una experiencia inolvidable para ellos, una oportunidad para demostrar sus habilidades artísticas y de actuación.",
    date: "Diciembre de 2019"
  },
  {
    title:"Reconocimiento de Unidos por la alegría",
    text:"En noviembre de 2016, la Legislatura de la Ciudad Autónoma de Buenos Aires nos reconoce a la Asociación Civil Unidos por la Alegría como una entidad sin fines de lucro que contribuye al desarrollo e inclusion laboral y/o social de la las personas con discapacidad intelectual  ",
    date: "11 de noviembre 2016"
  },
  {
    title:"Visita merendero Colibríes",
    text:"Festejamos en conjunto con el merendero colibríes de Esteban Echeverria Dia internacional de las personas con discapacidad, pasamos una tarde llena de actividades y de mucho disfrute",
    date: "Diciembre 2021"
  },
  {
    title:"Dia internacional de la discapacidad",
    text:"Participamos en el municipio de la matanza en una convencion por el dia internacional de la discapacidad del anio 2017",
    date: "Diciembre 2017"
  },
  {
    title:"Barrileteada de unidos",
    text:"Fuimos al parque Rivera Sur donde los chicos pudieron levantar vuelo con sus propios barriletes que realizaron en nuestros diferentes talleres de arte",
    date: "20 septiembre 2022"
  },
]


const Events = () => {
  return (
    <div className='mb-5'>
      <Navbar/>

      <Header image={header} title={data.title} text={data.text}/>

      <div style={{marginBottom:'7rem'}} className="d-flex justify-content-center align-items-center gap-1 flex-column">
        <h3 className="font-family fs-6 text-center">Enceuntra nuestros eventos mas recientes, mas antiguos y proximos a venir</h3>
        <h3 style={{fontSize:'3.5rem'}} className="font-family text-center">Eventos realizados</h3>
      </div>

      <section className='d-flex justify-content-center align-items-center gap-5 flex-column'>
      <ContainerEvents image={event5} title={events[4].title} text={events[4].text} date={events[4].date}/>
        <ContainerEvents image={event3} title={events[2].title} text={events[2].text} date={events[2].date}/>
        <ContainerEvents image={event1} title={events[0].title} text={events[0].text} date={events[0].date}/>
        <ContainerEvents image={event4} title={events[3].title} text={events[3].text} date={events[3].date}/>
        <ContainerEvents image={event2} title={events[1].title} text={events[1].text} date={events[1].date}/>
      </section>
    </div>
  )
}

export default Events