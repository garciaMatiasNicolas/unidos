

const Donation = () => {
  return (
    <div style={{ maxWidth:"50rem"}} className='p-3 d-flex justify-content-center align-items-center flex-column shadow p-3 rounded m-5 w-100'>

        <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
            <h3 className="font-family fs-6 text-center">¿Te interesaria colaborar con nostros?</h3>
            <h3 className="font-family fs-1 text-center">Hace click aca!</h3>
        </div>

        <button data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:'8rem'}} className='font-family App-btn2'>Dona aquí</button>

    </div>
  )
}

export default Donation