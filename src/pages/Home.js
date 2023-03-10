import Carrousel from "../components/home/Carrousel"
import EventsCards from "../components/home/EventsCards"
import Contact from "../components/home/Contact"
import Testimonials from "../components/home/Testimonials"
import FAQs from "../components/home/FAQs"
import About from "../components/home/About"

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <Carrousel/>
      <EventsCards/>
      <About/>
      <Contact/>
      <FAQs/>
      <Testimonials/>
    </div>
  )
}

export default Home