import React from 'react';
import Header from '../components/contact/HeaderSections';

const data = {
  image: "https://www.fundacionmapfre.org/media/accion-social/proyectos/internacionales/venezuela/finalizados/alimentacion-discapacidad-1194x585-1.jpg",
  title: "Descubre nuestra historia",
  text: "En esta seccion encontraras toda la historia de nuestra fundacion. Desde nuestros comienzos alla por 2010 hasta la actualidad"
}

const AboutUs = () => {
  return (
    <div>
      <Header image={data.image} title={data.title} text={data.text}/> 
    </div>
  )
}

export default AboutUs