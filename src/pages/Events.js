import Header from '../components/contact/HeaderSections.js';
import ContainerEvents from '../components/events/ContainerEvents';
import event1 from '../assets/unidos-history-1.jpg';
import header from '../assets/unidos-colaboration-1.jpg';
import Navbar from '../components/Navbar.js';


const data = {
  title: "Conoce nuestros proximos eventos!",
  text: "En esta seccion podras previsualizar eventos anteriores como asi tambien nuestros proximos eventos!"
}

const events = [
  {
    title:"Titulo del evento",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "27/05/2015"
  }
]


const Events = () => {
  return (
    <div className='mb-5'>
      <Navbar/>
      <Header image={header} title={data.title} text={data.text}/>
      <section className='d-flex justify-content-center align-items-center gap-3 flex-column'>
        <ContainerEvents image={event1} title={events[0].title} text={events[0].text} date={events[0].date}/>
      </section>
    </div>
  )
}

export default Events