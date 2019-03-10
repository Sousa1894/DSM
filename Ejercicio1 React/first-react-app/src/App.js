import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {

    userOutput:[
     { name: 'Carlos', age:25},
     { name: 'Sergio', age: 40},
     { name: 'Andrea', age: 23}
    ],
    otherState:'some other value'

  }

  switchNameAndAgeHandler = (newName, newAge)=>{
    this.setState({
      userOutput:[
        {name: newName, age: newAge},
        {name:'Sergio', age:'40'},
        {name: 'Andrea',age:newAge}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      userOutput:[
        {name: event.target.value, age:'25'},
        {name:'Sergio', age:'40'},
        {name: 'Andrea',age:'23'}
      ]

    })
  }
  nameAndAgeChangedHandler = (event) => {
    this.setState({
      userOutput:[
        {name: event.target.value, age: event.target.value},
        {name:'Sergio', age:'40'},
        {name: 'Andrea',age:'23'}
      ]

    })
  }




  render() {
    return (
      <div className="App">
      <h1>Ejercicio 1</h1>
       <UserInput name={this.state.userOutput[0].name}
       changed={this.nameChangedHandler}/>
       <button
       onClick={()=> this.switchNameAndAgeHandler('Silvia','37')}>Cambiar nombre</button>
       <UserOutput 
       name={this.state.userOutput[0].name}
       age= {this.state.userOutput[0].age}
       click = {this.switchNameAndAgeHandler.bind(this,'Andrea','27')}
       changed = {this.nameAndSurnameChangedHandler}
       />
       <UserOutput
       name={this.state.userOutput[1].name}
       age = {this.state.userOutput[1].age}
       />
      </div>
    );
  }
}

export default App;
