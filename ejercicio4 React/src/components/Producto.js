import '../components/Producto.css'

import React from 'react';

    const Producto = (props) =>{
        return (
            <div>
              
              <img src={props.link} alt="imagen" onClick={props.clicked} className="Imagen"></img>
              <p>{props.nombre}</p>

            </div>
        );
    }


export default Producto;