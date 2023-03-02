import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<About/>}/>
        <Route path='/eventos' element={<Events/>}/>
        <Route path='/contacto' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
