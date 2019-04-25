import React, { Component } from 'react';
import axios from '../axios';
import Collapse from '@kunukn/react-collapse';
import './ListaPedidos.css'
import Button from 'react-bootstrap/Button';








class ListaPedidos extends Component {
    state = {
        pedidos:[],
        error:false,
        isFalse:[]
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
                var lt=[];
                
                for(var i =0;i<p.length;i++){
                  lt[i]=false;
                }
                this.setState({isFalse:lt});
                
                
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
        });
      }
      deleteUpdatePostHandler = (id) => {
        axios.delete('/pedidos/' + id + '.json')
            .then(response => {
                alert("El pedido se ha borrado correctamente");
                console.log(response);
            });
        // axios.put('/posts/' + this.props.id + '.json', {
        //     ...this.state.loadedPost,
        //     author: "new author added " + new Date()
        // })
        //     .then(response => {
        //         console.log(response);
        //     });
    }

      
     


  render() {
    var pedidos = this.state.pedidos;
    var infoPedidos = [];
    var cantidadPedidos = pedidos.length;
    
  //  var marcasGuantillas = pedidos[0].nombreGuantillas;
    
    
    for(let i=0;i<cantidadPedidos;i++){

            infoPedidos[i]= (<div>
              <div onClick={()=>{
               
                var a = [];
                a = this.state.isFalse;
                a[i]=!a[i]; 
                this.setState({isFalse:a});
               }

             }>
               

              <Collapse isOpen={!this.state.isFalse[i]}>
                  <div 
                  >
                  <p><b>Pedido de: {pedidos[i].nombre}</b></p>
                  
                  
                  </div>
              </Collapse>

              <Collapse isOpen={this.state.isFalse[i]}>
                <div>
                    <p><b>Nombre: </b>{pedidos[i].nombre}</p>
                    <p><b>Dirección: </b>{pedidos[i].direccion}</p>
                    <p><b>Información del pedido: </b></p>
                    {pedidos[i].infoString}<br></br>
                    <br></br><p><b>Total del pedido:</b> {pedidos[i].totalFinal}€</p>
                    
                   
                   
                </div>
              </Collapse>


             
              </div>
              
              <Button variant="info" onClick={() => this.deleteUpdatePostHandler(pedidos[i].idb)}>borrar</Button>
              <Button variant="info" className="botonSeguirComprando">Continuar comprando</Button> <hr></hr></div>);
    console.log(this.state.isFalse);
    }



    return (
      
       

      <div className="listaPedidos">
        
      
        {infoPedidos}
          
      </div>
    );
  }
}

export default ListaPedidos;