import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const Form = () => {

    const [dataClient, setDataClient] = useState({fullname:"", email:"", phone:"", question:""});

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setDataClient({...dataClient, [name]:value});
    }

    const fetchApi = ()=>{
        axios.post('https://apiunidos.onrender.com/api/contact', {
            fullname: dataClient.fullname,
            email : dataClient.email,
            phone: dataClient.phone,
            question: dataClient.question
        })
        
        .then((res) => {
           res.data.status === 200 ? Swal.fire({title: 'Se envio su consulta correctamente', icon: 'success', confirmButtonText: 'ok'}) :  Swal.fire({title: 'Ocurrio un error, intente en orto momento', icon: 'error', confirmButtonText: 'ok'});
        })
        
        .catch( (error) => {
            console.log(error);
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        e.target.reset();
    };

  return (
    <form onSubmit={handleSubmit} className=' mb-5 d-flex flex-column justify-content-center align-items-start gap-5'>
        <div className='w-100'>
            <input onChange={handleInput} type='text' autoComplete='off' name='fullname' placeholder='Tu nombre completo...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <input onChange={handleInput} type='email' autoComplete='off' name='email' placeholder='Tu correo...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <input onChange={handleInput} type='phone' autoComplete='off' name='phone' placeholder='Tu telefono...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <textarea onChange={handleInput} style={{height:'250px'}} type='text' autoComplete='off' name='question' placeholder='Tu consulta...' className='w-100 font-family' />
        </div>

        <button onClick={fetchApi}  className='font-family App-btn'>Enviar</button>
    </form>
  )
}

export default Form