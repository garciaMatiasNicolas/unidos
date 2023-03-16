

const Container1 = (props) => {
  return (
    <div className='row p-5 w-100 d-flex justify-content-center align-items-center gap-5' style={{flexWrap:'wrap-reverse'}}>
        <div className='container-about d-flex flex-column gap-3 col-6 col-lg-5 column'>
            <h2 className='font-family fs-1 text-start fw-bold align text-center'>{props.title}</h2>
            <p className='font-family align'>{props.text}</p>
        </div>

        <div className='col-6 col-lg-5 column d-flex'>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <img className='link w-100 h-100 rounded ' src={props.image}/>
            </div>
        </div>
    </div>
  )
}

export default Container1