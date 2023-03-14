

const styles = {maxWidth: "1200px"}

const ContainerEvents = (props) => {

  return (
    <div className="w-100 d-flex justify-content-center align-items-start gap-5 pb-4 border-bottom flex-wrap px-5" style={styles}>
        <div className="w-auto">
            <img className='w-100 h-100 rounded imgEvents' src={props.image} alt=""/>
        </div>

        <div className="events d-flex flex-column justify-content-between align-items-start">
            <div>
                <h2 className='font-family fs-1'>{props.title}</h2>
                <p className='font-family mt-3 ms-1'>{props.text}</p>
            </div>

            <span className='font family fs-6 text-primary'>{`Fecha: ${props.date}`}</span>
        </div>
    </div>
  )
}

export default ContainerEvents