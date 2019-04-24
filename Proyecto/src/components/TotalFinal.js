import React, { Component } from 'react';
import  './FilaProducto.css';
import Button from 'react-bootstrap/Button';



class TotalFinal extends Component {
    state = {
        
    }


  render() {
    
    return (
      <div className='totalFinal'>
      <Button variant="success" className='totalFinal'>Total del pedido: <b>{this.props.totalFinal}€</b></Button>
      <br></br>
      
      
      </div>
    );
  }
}

export default TotalFinal;