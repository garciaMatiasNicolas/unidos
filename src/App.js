import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Footer from './components/Footer';
import Home from './pages/Home';
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
