import React, { Component } from 'react';

import FormularioCompleto from './components/FormularioCompleto.js';
import Product from './components/Producto.js';
import axios from './axios';
import InfoProducto from './components/InfoProducto.js';
import './components/Producto.css'

class App extends Component {

  state = {
    products: [],
    selectedProductId: null,
    error: false
}

componentDidMount () {
        axios.get( '/productos.json' )
            .then( response => {
             
              let p = [];
                for(let key in response.data){
                  p.push({
                    ...response.data[key],
                    idb: key
                  });
                }
                
                this.setState({products: p});
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
        });
}

productSelectedHandler = (id) => {
  
  this.setState({selectedProductId: id});
}


  
  render() {
    let products = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      products = this.state.products.map(product => {
          return <Product 
              key={product.idb} 
              nombre={product.nombre} 
              link={product.imagen}
              clicked={() => this.productSelectedHandler(product.idb)}
                />;
          });
    }
    
    return (
      <div className="App">
            <h1 className="Producto">Ejercicio 4</h1>
            <br></br>
        <section className="Producto">
        {products}
        </section>
        <hr></hr>
        <section className="Producto">
          <InfoProducto id={this.state.selectedProductId}></InfoProducto>
        </section>
        <hr></hr>
        <section className="Producto">
        <FormularioCompleto></FormularioCompleto>

        </section>
      </div>
    );
  }
}

export default App;
