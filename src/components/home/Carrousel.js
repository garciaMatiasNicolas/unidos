import { useEffect, useState } from "react"
import { dataCarrouselHome } from "../../data/CarrouselHome"
import MediaCarrousel from "./MediaCarrousel"


const Carrousel = () => {
  return(
    <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">

      <MediaCarrousel/>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-angle-right"></i></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   )
}

export default Carrousel