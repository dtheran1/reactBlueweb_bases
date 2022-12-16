import React, { Fragment } from 'react'
import Avatar from './Avatar';

const Comentario = ({ sujeto }) => {
    return (
        <Fragment>
            <div className='container'>
                <h1>Comentario</h1>
                <hr />
                <div className='media'>
                    <Avatar urlImage={sujeto.urlImage} />
                    <div className='media-body'>
                        <h5 className='mt-0'>{sujeto.name}</h5>
                        {sujeto.text}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Comentario;