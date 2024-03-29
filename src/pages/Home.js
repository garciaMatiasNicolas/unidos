import Carrousel from "../components/home/Carrousel"
import EventsCards from "../components/home/EventsCards"
import Contact from "../components/home/Contact"
import FAQs from "../components/home/FAQs"
import About from "../components/home/About"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <Navbar/>
      <Carrousel/>
      <EventsCards/>
      <About/>
      <Contact/>
      <FAQs/>
    </div>
  )
}

export default Home