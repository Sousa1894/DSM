import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import  './Navegador.css';

class Navegador extends Component {
    state = {
     nombre:'hola',
     nombre2:'adios' 
    } 

    

  render() {
    return (
      <div className='navegador'>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Guantillas</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
    <Nav className="mr-auto">
      <Nav.Link href="#pricing">Carrito  </Nav.Link>
    </Nav>
      <img src ='https://www.lagildadelnorte.com/wp-content/uploads/2016/06/carrito-compra.png' alt='carrito' width="50px" height="50px"></img>
    </Form>
  </Navbar>
      </div>
    );
  }
}

export default Navegador;
