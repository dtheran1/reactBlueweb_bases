import React, { Fragment, useState } from 'react'

const Lista = () => {
    const [list, setList] = useState([])
    const agregar = () => {
        setList([...list, list.length + 1])
    }

    return (
        <Fragment>
            <h2> Lista </h2>
            <p> {list.length} </p>
            {
                list.map((n, i) => <p key={i}>{n} </p>)
            }


            <button onClick={agregar}>Agrega un nuevo numero</button>
        </Fragment>
    );
}

export default Lista;