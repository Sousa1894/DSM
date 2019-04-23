import React from 'react';
import  './FilaProducto.css';
import Badge from 'react-bootstrap/Button';
    
    const Total = (props) =>{
        return (
            <div >
            <p className='total'><b>{props.total}€</b></p>
              <Badge variant="warning" className='totalNumero'>Total/Unidad:</Badge>
              
            </div>

        );
    }


export default Total;