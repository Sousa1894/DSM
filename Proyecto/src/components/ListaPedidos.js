import React, { Component } from 'react';
import axios from '../axios';








class ListaPedidos extends Component {
    state = {
        pedidos:[],
        error:false
    }
    componentDidMount () {
        axios.get( '/pedidos.json' )
            .then( response => {
              let p = [];
                for(let key in response.data){
                  p.push({
                    ...response.data[key],
                    idb: key
                  });
                }
                
 
                this.setState({pedidos: p});
                
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
        });
      }
  render() {
    var pedidos = this.state.pedidos;
    var infoPedidos = [];
    var cantidadPedidos = pedidos.length;
    
  //  var marcasGuantillas = pedidos[0].nombreGuantillas;
    
    
    for(var i=0;i<cantidadPedidos;i++){

            infoPedidos[i]= (
                <div>
                    <p>Nombre:{pedidos[i].nombre}</p>
                    <p>Dirección:{pedidos[i].direccion}</p>
                    <p>Información del pedido:</p>
                    <p>Total del pedido: {pedidos[i].totalFinal}€</p>
                    {pedidos[i].infoProducto}
                    <hr></hr>
                </div>);

    }



    return (
      
       

      <div className="div">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {console.log(this.state.pedidos)}
        {infoPedidos}
          
      </div>
    );
  }
}

export default ListaPedidos;