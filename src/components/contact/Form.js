import React from 'react'

const Form = () => {
  return (
    <form className=' mb-5 d-flex flex-column justify-content-center align-items-start gap-5'>
        <div className='w-100'>
            <input type='text' autoComplete='off' name='fullname' placeholder='Tu nombre completo...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <input type='email' autoComplete='off' name='email' placeholder='Tu correo...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <input type='phone' autoComplete='off' name='phone' placeholder='Tu telefono...' className='w-100 font-family' />
        </div>

        <div className='w-100'>
            <textarea style={{height:'250px'}} type='text' autoComplete='off' name='question' placeholder='Tu consulta...' className='w-100 font-family' />
        </div>

        <button className='font-family App-btn'>Enviar</button>
    </form>
  )
}

export default Form