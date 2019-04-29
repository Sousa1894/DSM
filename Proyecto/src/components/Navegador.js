import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import AvisoRealizarPedido from './AvisoRealizarPedido.js';
import Principal from './Principal.js';
import { Route, NavLink } from 'react-router-dom';
import  './Navegador.css';
import FormularioPedidoFinal from './FormularioPedidoFinal.js';
import PantallaAgradecimiento from './PantallAgradecimiento.js';
import ListaPedidos from './ListaPedidos.js';


class Navegador extends Component {
    state = {
     
    } 

    

  render() {
    return (
      
      <div>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Guantillas</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to="/"><b>Principal</b></NavLink>
      
    </Nav>
    <Form inline>
    <Nav className="mr-auto">
      <NavLink to="/ListaPedidos"><b>Pedidos</b>  </NavLink>
      
    </Nav>
      
      <img src ='https://www.lagildadelnorte.com/wp-content/uploads/2016/06/carrito-compra.png' alt='carrito' width="50px" height="50px"></img>
    </Form>
  </Navbar>
      <Route path='/' exact component={Principal}/>
      <Route path='/AvisoRealizarPedido' component={AvisoRealizarPedido}/>
      <Route path='/FormularioPedidoFinal' component={FormularioPedidoFinal}/>
      <Route path='/PantallaAgradecimiento' component={PantallaAgradecimiento}/>
      <Route path='/ListaPedidos' component={ListaPedidos}/>

      </div>
    );
  }
}

export default Navegador;
