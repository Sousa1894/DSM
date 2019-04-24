import React, { Component } from 'react';
import FilaProducto from './FilaProducto.js';
import TotalFinal from './TotalFinal.js';
import axios from '../axios';
import { Route, Link } from 'react-router-dom';
import './FilaProducto.css';
import Button from 'react-bootstrap/Button';
import AvisoRealizarPedido from './AvisoRealizarPedido.js';



import  './FilaProducto.css';
class Principal extends Component {

  state = {
  guantillas:[],
  total:[],
  totalFinal:0,
  cantidad:[],
  nombreGuantillas:[]
 
}
  
componentDidMount () {
  axios.get( '/guantillas.json' )
      .then( response => {
        let p = [];
          for(let key in response.data){
            p.push({
              ...response.data[key],
              idb: key
            });
          }
          
          var t = [];
          var s = [];
          var v = [];
         ;
          for(var i=0;i<p.length;i++){
            t[i] = 0;
            s[i]=0;
            v[i]=p[i].marca;
          }
          this.setState({nombreGuantillas:v});
          this.setState({cantidad:s});
          this.setState({total:t});
          
          
          this.setState({guantillas: p});
          
          
      } )
      .catch(error => {
          // console.log(error);
          this.setState({error: true});
  });
}

aumentaCantidad = (id) =>{
 
  var q = [];
  var t=[];
  
  if(this.state.cantidad[id]>=0){
  q = this.state.cantidad;
  q[id]=q[id]+1;
  this.setState({cantidad:q});
  t = this.state.total;
  t[id]=t[id]+0+this.state.guantillas[id].precio;
  this.setState({total:t});
  
  }
this.calculoTotalFinal();
}

disminuirCantidad = (id) =>{
  var q = [];
  var t=[];
  if(this.state.cantidad[id]>0){
    q = this.state.cantidad;
    q[id]=q[id]-1;
    this.setState({cantidad:q});
    t = this.state.total;
    t[id]=t[id]-0-this.state.guantillas[id].precio;
    this.setState({total:t});
  }
  this.calculoTotalFinal();
}

calculoTotalFinal = () =>{
  var totalFinal =0;
  for(var i=0;i<this.state.cantidad.length;i++){
    totalFinal = totalFinal + this.state.total[i];
  }
  this.setState({totalFinal:totalFinal});

}




  render() {
    let guantillas = null;
    guantillas = this.state.guantillas.map(parGuantilla => {
      
      
      return <FilaProducto 
          key={parGuantilla.idb}
          imagen={parGuantilla.url}
          precio={parGuantilla.precio}
          nombre={parGuantilla.marca}
          total={this.state.total[parGuantilla.idb]}
          cantidad={this.state.cantidad[parGuantilla.idb]}
          clickedDown = {()=>this.disminuirCantidad(parGuantilla.idb)}
          clickedUp = {()=>this.aumentaCantidad(parGuantilla.idb)}
          
      />
       
    });
    
    
    
    
    return (
   
        <div>
        
    
        {guantillas}
        <br></br>
        <TotalFinal className='totalFinal'
            totalFinal={this.state.totalFinal}>
        </TotalFinal>
          <br></br>
        <Button className="totalFinal" variant="info"><Link to = {{
            pathname:"/AvisoRealizarPedido",
            state:{
              guantillas: this.state.guantillas,
              cantidad: this.state.cantidad,
              total:this.state.total,
              totalFinal:this.state.totalFinal,
              nombreGuantillas:this.state.nombreGuantillas
            }

        }}
        
        
        
        >Realizar Pedido</Link></Button>
        <Route path='/AvisoRealizarPedido' component={AvisoRealizarPedido}/>
        <br></br>
        <br></br>
        
        </div>
        
    );
  }
}

export default Principal;
