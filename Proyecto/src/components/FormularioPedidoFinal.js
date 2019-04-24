import React, { Component } from 'react';
import './Formulario.css';
import Button from 'react-bootstrap/Button';
import axios from '../axios';
import {Link } from 'react-router-dom';




class FormularioPedidoFinal extends Component {
    state = {
      nombre:'',
      direccion:'',
      guantillas:this.props.location.state.guantillas,
      total:this.props.location.state.total,
      totalFinal:this.props.location.state.totalFinal,
      cantidad:this.props.location.state.cantidad,
      nombreGuantillas:this.props.location.state.nombreGuantillas,
      infoProducto:this.props.location.state.infoProducto
      
    }


    sendInformationHandler=()=>{
      const data = {
        nombre: this.state.nombre,
        direccion: this.state.direccion,
        total: this.state.total,
        totalFinal: this.state.totalFinal,
        cantidad:this.state.cantidad,
        nombreGuantillas:this.state.nombreGuantillas,
        infoProducto:this.state.infoProducto
    };
    axios.post('/pedidos.json', data)
        .then(response => {
            //alert('contenido guardado');
        }).catch(error=>{
            //alert('hay un error');
        });
    }

  render() {
    

    return (
      <div className='div'>
        <p>Nombre y apellidos:</p>
        <input type="text" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})} />
        <br></br>
        <p>Direccion:</p>
        <input type="text" value={this.state.direccion} onChange={(event) => this.setState({direccion: event.target.value})} />
        <br></br>
        <br></br>
        <br></br>


        <Button className="totalFinal" variant="info" onClick={this.sendInformationHandler}><Link to = {{
            pathname:"/PantallaAgradecimiento",
            state:{
  
            }

        }}
        >RealizarPedido </Link></Button>
        {console.log(this.state.infoProducto)}
      </div>
    );
  }
}

export default FormularioPedidoFinal;