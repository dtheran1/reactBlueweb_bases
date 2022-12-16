import React, { Fragment } from 'react'

const Saludo = (props) => {

    const nombre = props.nombre;
    return (
        <Fragment>
            <h2>Hola Sr {nombre} </h2>
        </Fragment>
    );
}

export default Saludo;