import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>FormHook</h1>

            <form className='container' onSubmit={handleSubmit(onSubmit)}>

                <input
                    name='titulo'
                    className='form-control my-2'
                    {...register("titulo", { required: true })}
                />
                {errors.titulo && <span className='text-danger text-small d-block mb-2'>Este campo es requerido</span>}

                <button className='btn btn-primary'> Enviar </button>
            </form>
        </Fragment>
    );
}

export default FormHook;