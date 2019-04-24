import React, { Component } from 'react';
import './PantallaAgradecimiento.css';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';






class PantallaAgradecimiento extends Component {
    state = {
    
    }

  render() {
    
    
    
    


    return (
      
      <div className="div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>hola amigo gracias por comprar</p>
        <Button className="totalFinal" variant="info"><Link to = {{
            pathname:"/",
            state:{
  
            }

        }}
        >Volver al Inicio</Link></Button>    
      </div>
    );
  }
}

export default PantallaAgradecimiento;