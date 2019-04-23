import React from 'react';
import Button from 'react-bootstrap/Button';
import  './FilaProducto.css';
    
    const Producto = (props) =>{
        return (
            <div className='enLinea'>
                <img src={props.imagen} alt="imagen" className='imagen'width='200px' height='200px'></img>
                <p className='elemento'><b>Nombre: {props.nombre}</b></p>
                <p className='elemento'><b>Precio: {props.precio}€</b></p>
                <Button variant="danger" onClick={props.clickedUp} className='elemento'>+</Button>
                <p className='cantidad'>{props.cantidad}</p>
                <Button variant="danger" onClick={props.clickedDown} className='elemento'>-</Button>
            </div>

        );
    }


export default Producto;