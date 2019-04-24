import React, { Component } from 'react';
import  './components/FilaProducto.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav.js';
class App extends Component {

 
 

  




  render() {
    
    
    
    return (
        <BrowserRouter>
          <div className="App">
            <Nav >
            </Nav>
          </div>
        </BrowserRouter>
        
    );
  }
}

export default App;
