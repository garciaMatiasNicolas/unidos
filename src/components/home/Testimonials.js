
const Testimonials = () =>{

    return(
        <div style={{background:'#F3F4F5'}} className="p-5">
            <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
                <h3 className="font-family fs-6 text-center">¿Quieres saber que opinan de nosotros?</h3>
                <h3 className="font-family fs-1 text-center">Nuestros testimonios</h3>
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 w-100 px-1">
                <div className="card text-center">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                        <div style={{width:'5rem', height:'5rem'}} className="rounded-circle bg-secondary"></div>
                        <p className="font-family fs-6">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-muted">
                        <h3 className="font-family fs-5">Juan Perez</h3>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                        <div style={{width:'5rem', height:'5rem'}} className="rounded-circle bg-secondary"></div>
                        <p className="font-family fs-6">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-muted">
                        <h3 className="font-family fs-5">Juan Perez</h3>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2">
                        <div style={{width:'5rem', height:'5rem'}} className="rounded-circle bg-secondary"></div>
                        <p className="font-family fs-6">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer text-muted">
                        <h3 className="font-family fs-5">Juan Perez</h3>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default Testimonials