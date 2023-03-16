import Images from "./Images"

const Gallery = (props) => {
  return (
    <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby={props.id} aria-hidden="true">
    
        <div className="modal-dialog">
            
            <div className="modal-content">
                
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                
                    <Images images={props.images}/>

                </div>

            </div>
        
        </div>
  </div>
  )
}

export default Gallery