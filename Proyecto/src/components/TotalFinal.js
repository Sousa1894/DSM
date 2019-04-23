import React, { Component } from 'react';
import  './FilaProducto.css';
import Badge from 'react-bootstrap/Button';



class TotalFinal extends Component {
    state = {
        
    }


  render() {
    
    return (
      <div>
      <Badge variant="success" className='totalFinal'>Total del pedido: <b>{this.props.totalFinal}€</b></Badge>
      <br></br>
      
      
      </div>
    );
  }
}

export default TotalFinal;