import React, { Fragment, useState } from 'react'

const Formulario = () => {
    const [datos, setDatos] = useState({
        name: '',
        lastName: ''
    });

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault();
        console.log(`${datos.name} ${datos.lastName}`);

    }

    return (
        <Fragment>
            <div className='container mt-5'>
                <h1>Fomulario</h1>

                <form className='row' onSubmit={enviar}>
                    <div className='col-md-3'>
                        <input type='text' placeholder='Ingresa tu nombre' className='form-control' name='name' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-3'>
                        <input type='text' placeholder='Ingresa tu apellido' className='form-control' name='lastName' onChange={handleInputChange} />
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-primary' type='submit'> Enviar </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Formulario;