import React from 'react';


    
    const Formulario = (props) =>{
        return (
            <div>
                <p>{props.tituloFormulario}</p>
                 <input type="text" value={props.valorFormulario} onChange={props.changed} />


            </div>
        );
    }


export default Formulario;