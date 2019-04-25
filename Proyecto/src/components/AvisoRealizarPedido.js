import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';






class AvisoRealizarPedido extends Component {
    state = {
      guantillas:this.props.location.state.guantillas,
      total:this.props.location.state.total,
      totalFinal:this.props.location.state.totalFinal,
      cantidad:this.props.location.state.cantidad,
      nombreGuantillas:this.props.location.state.nombreGuantillas,
      infoString:''
      
    }

  componentDidMount(){
    
    console.log(this.state.guantillas);
    console.log(this.state.total);
    console.log(this.state.cantidad);
    console.log(this.state.totalFinal);
    console.log(this.state.nombreGuantillas);
    this.sendS();

  }
  


  sendS=()=>{
    var s = '';
    var nombre = this.state.nombreGuantillas;
    var cantidad = this.state.cantidad;
    var valor = this.state.guantillas;
    var total = this.state.total;
    for(var i=0;i<cantidad.length;i++){
      s = s+" Has seleccionado "+cantidad[i]+" unidades de guantillas "+nombre[i]+" a "+valor[i].precio+" € la unidad haciendo un total de "+total[i]+" €\n";
    }
    this.setState({infoString:s});
  }
  

  render() {
    
    var nombre = this.state.nombreGuantillas;
    var cantidad = this.state.cantidad;
    var valor = this.state.guantillas;
    var total = this.state.total;
    var info = [];
    
    
        for(var i=0;i<cantidad.length;i++){
          info[i] = (
            <p>Has seleccionado {cantidad[i]} unidades de guantillas {nombre[i]} a {valor[i].precio}€ la unidad haciendo un total de {total[i]}€</p>
            
          );
         
        }
    
    


    return (
      
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <p><b>El total del pedido es de {this.state.totalFinal}€</b></p>
        <b>{info}</b>
        

        <Button className="botonIzq" variant="secondary"><Link to = {{
            pathname:"/",
            state:{
              guantillas: this.state.guantillas,
              cantidad: this.state.cantidad,
              total:this.state.total,
              totalFinal:this.state.totalFinal,
              nombreGuantillas:this.state.nombreGuantillas
              
            }

        }}
        >Volver </Link></Button>
         <Button className="totalFinal" variant="secondary"><Link to = {{
            pathname:"/FormularioPedidoFinal",
            state:{
              guantillas: this.state.guantillas,
              cantidad: this.state.cantidad,
              total:this.state.total,
              totalFinal:this.state.totalFinal,
              nombreGuantillas:this.state.nombreGuantillas,
              infoString:this.state.infoString
              
            }

        }}
        >Continuar </Link></Button>
        
       
        
       
       

        
      </div>
    );
  }
}

export default AvisoRealizarPedido;