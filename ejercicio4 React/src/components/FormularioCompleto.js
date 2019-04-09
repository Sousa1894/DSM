import React, { Component } from 'react';
import Formulario from './Formulario';
import axios from '../axios';


class FormularioCompleto extends Component {
    state = {
       nombre: '',
       precio: '',
       descripcion: '',
       imagen: ''
    }

    sendInformationHandler = () =>{
        const data = {
            nombre: this.state.nombre,
            precio: this.state.precio,
            descripcion: this.state.descripcion,
            imagen: this.state.imagen
        };
        axios.post('/productos.json', data)
            .then(response => {
                alert('contenido guardado');
            }).catch(error=>{
                alert('hay un error');
            });
    }

  render() {
    return (
      <div>
        <Formulario tituloFormulario={"Nombre:"} value={this.state.nombre} changed={(event) => this.setState({nombre: event.target.value})}/>
        <Formulario tituloFormulario={"Precio:"} value={this.state.precio} changed={(event) => this.setState({precio: event.target.value})} />
        <Formulario tituloFormulario={"descripcion:"} value={this.state.descripcion} changed={(event) => this.setState({descripcion: event.target.value})}/>
        <Formulario tituloFormulario={"imagen:"} value={this.state.imagen} changed={(event) => this.setState({imagen: event.target.value})}/>
        <br></br>
        <button onClick={this.sendInformationHandler}>Enviar</button>

      </div>
    );
  }
}

export default FormularioCompleto;
