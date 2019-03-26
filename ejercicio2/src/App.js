import React, { Component } from 'react';

import './App.css';
import InputComponent from './InputComponent/InputComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    InputComponent:[
      {name:'',valor:''}
    ],
    CharComponent:[
      {letra:''}
    ],
   
    otherState:'some other value',
    largura:''
  }

  
  getArrayChars = () =>{
    
    const mensaje = this.state.InputComponent[0].name;
    const arrayChars = mensaje.split("");
    return arrayChars;
    
  }


  switchParrafoHandler = (event) =>{
    this.setState({
      InputComponent:[
        {name:event.target.value, valor: event.target.value}
      ],
      CharComponent:[
        {letra:event.target.value}
      ]
    })
    this.CheckTextoLargo();
    

  }

  deleteLetraArray = (index) => {
    // const persons = this.state.persons.slice();
   
    const arrayChars = this.getArrayChars();
    arrayChars.splice(index, 1); // de esta forma estamos sacando del array el elemento de indice personIndex
    
    var arrayfinal = "";
    
    for(var i = 0;i< arrayChars.length;i++){
      arrayfinal= arrayfinal+arrayChars[i];
    }
    
    this.setState({
      CharComponent:[
        {letra:arrayfinal} 
      ],
      InputComponent:[
        {name:arrayfinal,valor:arrayfinal}
      ]
    });
    
  }


  CheckTextoLargo = () => {
    const lengthWord = this.state.InputComponent[0].name.length;
    if(lengthWord>=4){
      this.setState({
       
          largura:'demasiado largo'
        
      })
    }else{
      this.setState({
      
          largura:'demasiado corto'
        
      })
    }
    
  }
 

  render() {
     /*// Old-school:
var a2 = a.map(function(s){ return s.length });

// ECMAscript 6 using arrow functions
var a3 = a.map( s => s.length );

Es lo mismo lo de arriba que lo de abajo.
*/ 

    let caracteres = null;
    const letras = this.getArrayChars();
   
    caracteres = (
        <div>
          {letras.map((charComponent,index)=>{
            return <CharComponent
            letra={charComponent}
            click={()=> this.deleteLetraArray(index)}
            key = {index}
            />
          })}
        </div>
    );
    

    return (
      <div className="App">
      <h1>Ejercicio2</h1>
      
      <InputComponent
      name={this.state.InputComponent[0].name}
      valor={this.state.InputComponent[0].valor}
      changed={this.switchParrafoHandler}
      />

      <p>{this.state.largura}</p>

      {caracteres}
      
      </div>
    );
  }
}

export default App;
