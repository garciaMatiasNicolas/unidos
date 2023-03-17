import Header from '../components/contact/HeaderSections.js';
import ContainerEvents from '../components/events/ContainerEvents';
import event1 from '../assets/unidos-history-1.jpg';
import event2 from '../assets/unidos-history-4.jpg';
import event3 from '../assets/unidos-carrousel-2.jpeg';
import event4 from '../assets/unidos-events-4.jpeg';
import event5 from '../assets/unidos-cards-1.jfif';
import event6 from '../assets/estadios.jpeg';
import event7 from '../assets/san-clemente.jpeg';
import header from '../assets/unidos-colaboration-1.jpg';
import estadio1 from '../assets/estadio-1.jpeg';
import estadio2 from '../assets/estadio-2.jpeg';
import estadio3 from '../assets/estadio-3.jpeg';
import viaje1 from '../assets/san-clemente-2.jpeg';
import viaje2 from "../assets/san-clemente-4.jpeg";
import viaje3 from '../assets/san-clemente-3.jpeg';
import legis1 from '../assets/legis-1.jpg';
import legis2 from "../assets/legis-2.jpg";
import legis3 from '../assets/legis-3.jpg';
import Navbar from '../components/Navbar.js';


const data = {
  title: "Conoce nuestros proximos eventos!",
  text: "En esta seccion podras previsualizar eventos anteriores como asi tambien nuestros proximos eventos!"
}

const events = [
  {
    title:"Nuestra Obra de teatro",
    text:"El Teatro comunitario 25 de Mayo de la ciudad de Buenos Aires fue el escenario de la última obra de teatro realizada por los chicos. La puesta en escena contó con el talento de ellos y con la participacion de los villuqueros, y fue dirigida por Liliana Vazquez. El día de la obra fue un gran éxito, el teatro estaba repleto de familiares y amigos que aplaudieron y vitorearon a los niños. La obra fue una experiencia inolvidable para ellos, una oportunidad para demostrar sus habilidades artísticas y de actuación.",
    date: "Diciembre de 2019",
    id:"teatro",
    images:['https://i.ibb.co/BtKpXYk/teatro-1.jpg', 'https://i.ibb.co/vZZLmxq/teatro-2.jpg', 'https://i.ibb.co/vH5VcnW/teatro-3.jpg', 'https://i.ibb.co/9c6c8c3/teatro-4.jpg',]
  },
  {
    title:"Reconocimiento de Unidos por la alegría",
    text:"En noviembre de 2016, la Legislatura de la Ciudad Autónoma de Buenos Aires nos reconoce a la Asociación Civil Unidos por la Alegría como una entidad sin fines de lucro que contribuye al desarrollo e inclusion laboral y/o social de la las personas con discapacidad intelectual  ",
    date: "11 de noviembre 2016",
    id:"legis",
    images:[legis1, legis2, legis3]
  },
  {
    title:"Visita merendero Colibríes",
    text:"Festejamos en conjunto con el merendero colibríes de Esteban Echeverria Dia internacional de las personas con discapacidad, pasamos una tarde llena de actividades y de mucho disfrute",
    date: "Diciembre 2021",
    id:"echeverria",
    images:['https://i.ibb.co/CwZDgSq/ech-1.jpg', 'https://i.ibb.co/R6QMy0V/ech-2.jpg', 'https://i.ibb.co/nfZCh0Y/ech-3.jpg', 'https://i.ibb.co/1L9HdJK/ech-4.jpg',]
  },
  {
    title:"Dia internacional de las personas con discapacidad",
    text:"Participamos en el municipio de la matanza en una convencion por el dia internacional de la discapacidad del anio 2017",
    date: "Diciembre 2017",
    id:"matanza",
    images:["https://i.ibb.co/2YyqMFh/dia-1.jpg", "https://i.ibb.co/x8yb1Kx/dia-2.jpg", "https://i.ibb.co/k5tFRqN/dia-3.jpg", "https://i.ibb.co/d2Y7ytL/dia-4.jpg", "https://i.ibb.co/CwZDgSq/ech-1.jpg"]
  },
  {
    title:"Barrileteada de unidos",
    text:"Fuimos al parque Rivera Sur donde los chicos pudieron levantar vuelo con sus propios barriletes que realizaron en nuestros diferentes talleres de arte",
    date: "20 septiembre 2022",
    id:"barrilete",
    images:['https://i.ibb.co/bdQ4bvL/barrileteada-1.jpg', 'https://i.ibb.co/NFjqdpD/barrileteada-2.jpg', 'https://i.ibb.co/wJNJ6VS/barrileteada-3.jpg', 'https://i.ibb.co/9vNrVjg/barrileteada-4.jpg', 'https://i.ibb.co/7vHRJz2/barrileteada-5.jpg']
  },

  {
    title:"Visitas a los estadios",
    text:"Fuimos de excursion a los diferentes estadios de River, Boca y San Lorenzo. Los chicos pudieron conocer y ver el campo de juego, las tribunas y los museos",
    date: "2017-2019-2021",
    id:"estadio",
    images:[estadio1, estadio2, estadio3]
  },

  {
    title:"Viaje San Clemente",
    text:"Fuimos de viaje con los padres y chicos miembros de la fundacion a San Clemente, donde pudimos visitar tambien mundo marino y pasar un hermoso fin de semana!",
    date: "Septiembre 2015",
    id:"viaje",
    images:[viaje1, viaje2, viaje3]
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
        <ContainerEvents images={events[4].images} id={events[4].id} image={event5} title={events[4].title} text={events[4].text} date={events[4].date}/>
        <ContainerEvents images={events[2].images} id={events[2].id} image={event3} title={events[2].title} text={events[2].text} date={events[2].date}/>
        <ContainerEvents images={events[0].images} id={events[0].id} image={event1} title={events[0].title} text={events[0].text} date={events[0].date}/>
        <ContainerEvents images={events[3].images} id={events[3].id} image={event4} title={events[3].title} text={events[3].text} date={events[3].date}/>
        <ContainerEvents images={events[1].images} id={events[1].id} image={event2} title={events[1].title} text={events[1].text} date={events[1].date}/>
        <ContainerEvents images={events[5].images} id={events[5].id} image={event6} title={events[5].title} text={events[5].text} date={events[5].date}/>
        <ContainerEvents images={events[6].images} id={events[6].id} image={event7} title={events[6].title} text={events[6].text} date={events[6].date}/>
      </section>
    </div>
  )
}

export default Events