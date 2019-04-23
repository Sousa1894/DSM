import React, { Component } from 'react';
import Producto from './Producto.js';
import Total from './Total.js'



class FilaProducto extends Component {
    state = {
    
    }

    


  render() {
    var array = [];
      for(var i=0;i<this.props.cantidad;i++){
        array.push(<img src={this.props.imagen} alt='' display='inline' width='50px' height='50px'></img>);
        
      }

    return (
      <div>
        
              <Producto
                imagen = {this.props.imagen}
                precio = {this.props.precio}
                nombre = {this.props.nombre}
                clickedUp = {this.props.clickedUp }
                cantidad = {this.props.cantidad}
                clickedDown = {this.props.clickedDown}
              />
              <p className='cantidad'>({this.props.cantidad})</p>
              {array}
              <Total
                total={this.props.total}
              />
         
        <br></br>
        <br></br>
        <hr></hr>
       
      
      </div>
    );
  }
}

export default FilaProducto;