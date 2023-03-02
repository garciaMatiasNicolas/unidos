import Carrousel from "./Carrousel"
import EventsCards from "./EventsCards"
import Contact from "./Contact"
import Testimonials from "./Testimonials"
import FAQs from "./FAQs"
import About from "./About"

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