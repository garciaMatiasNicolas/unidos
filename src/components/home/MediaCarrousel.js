import React from 'react'

const MediaCarrousel = () => {
  return (
   
    <div className="carousel-inner w-100">
        
        <div className="carousel-item active w-100 carrouselImages" style={{background:`url("https://www.fundacionleon.org.ar/wp-content/uploads/2022/05/GrupodeApoyo1.jpg")`}}>
          <div className="carrouselMedia">
              <h2 style={{fontSize:'5rem'}} className="text-white font-family">Titulo 1</h2>
              <span className="text-white font-family fs-5">Texto de noticia 1</span>
          </div>
        </div>

        <div className="carousel-item carrouselImages w-100" style={{background:`url("https://aspace.org/assets/uploads/noticias/6c34d-fobligado-750-422-px-.jpg")`}}>
          <div className="carrouselMedia">
              <h2 style={{fontSize:'5rem'}} className="text-white font-family">Titulo 2</h2>
              <span className="text-white font-family fs-5">Texto de noticia 2</span>
          </div>
        </div>

        <div className="carousel-item carrouselImages w-100" style={{background:`url("https://aspace.org/assets/uploads/noticias/6c34d-fobligado-750-422-px-.jpg")`}}>
          <div className="carrouselMedia">
              <h2 style={{fontSize:'5rem'}} className="text-white font-family">Titulo 3</h2>
              <span className="text-white font-family fs-5">Texto de noticia 3</span>
          </div>
        </div>

      </div>
    
  )
}

export default MediaCarrousel