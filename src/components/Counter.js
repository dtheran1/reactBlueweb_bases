import React, { useState, Fragment } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const temp = 19

    const aumentar = () => {
        setCounter(counter + 1)
    }

    return (
        <Fragment>
            <h3>Mi primer componente {counter} </h3>
            <h4> {
                temp > 20 ? 'Calor!' : 'Frioo'
            } </h4>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Counter;