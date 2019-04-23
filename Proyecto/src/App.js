import React, { Component } from 'react';
import Navegador from './components/Navegador.js';
import FilaProducto from './components/FilaProducto.js';
import TotalFinal from './components/TotalFinal.js';
import axios from './axios';
import Button from 'react-bootstrap/Button';
import  './components/FilaProducto.css';
class App extends Component {

  state = {
  guantillas:[],
  total:[],
  totalFinal:0,
  cantidad:[]
 
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
         ;
          for(var i=0;i<p.length;i++){
            t[i] = 0;
            s[i]=0;
          }
          
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
  console.log(totalFinal);
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
      <div className="App">
      <Navegador></Navegador>
      <br></br>
      <br></br>
      <br></br>
      {guantillas}
      <br></br>
      <TotalFinal
          totalFinal={this.state.totalFinal}>
      </TotalFinal>
        <br></br>
        
      <Button className='totalFinal'>Realizar Pedido</Button>
      <br></br>
      <br></br>
     
      
      </div>

    );
  }
}

export default App;
