import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const EjemploUno = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [Entradas, setEntradas] = useState([])
    const agregar = (data, e) => {
        console.log(data);
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }
    return (
        <Fragment>
            <div className='container my-2'>
                <h1> EjemploUno </h1>
                <form onSubmit={handleSubmit(agregar)}>
                    <input
                        name='titulo'
                        className='form-control my-2'
                        placeholder='Agregue un titulo'
                        {...register('titulo', { minLength: { value: 2, message: 'Minimo dos letras' }, required: { value: true, message: 'Este campo es obligatorio' } })}
                    />
                    {errors.titulo && <span className='text-danger text-small d-block mb-2'>{errors.titulo.message}</span>}

                    <input
                        name='descripcion'
                        className='form-control my-2'
                        placeholder='Descripcion'
                        {...register('descripcion', { required: { value: true, message: 'Este campo es obligatorio' } })} />
                    {errors.descripcion && <span className='text-danger text-small d-block mb-2'>{errors.descripcion.message}</span>}

                    <button className='btn btn-primary'> Agregar </button>
                </form>
                <ul>
                    {
                        Entradas.map(item => <li> {item.titulo} - {item.descripcion} </li>)
                    }
                </ul>
            </div>
        </Fragment>
    );
}

export default EjemploUno;