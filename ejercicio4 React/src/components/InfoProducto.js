import React, { Component } from 'react';

import axios from '../axios';



class InfoProducto extends Component {
    state = {
        loadedProduct: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedProduct || this.state.loadedProduct.idb !== this.props.id) {
                //axios.get('/posts.json?orderBy="id"&equalTo="' + this.props.id + '"')
                axios.get('/productos.json?orderBy="$key"&equalTo="' + this.props.id + '"')
                    .then(response => {
                        //console.log(response);
                        const productos = [];
                        for (let key in response.data) {
                            productos.push({
                                ...response.data[key],
                                idb: key
                            });
                        }
                        this.setState({ loadedProduct: productos[0] });
                    });
            }
        }
    }

    deleteUpdatePostHandler = () => {
        axios.delete('/posts/' + this.props.id + '.json')
            .then(response => {
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
        let producto = <p style={{ textAlign: 'center' }}>Please select a product!</p>;
        if (this.props.id) {
            producto = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedProduct) {
            producto = (
                <div className="FullPost">
                    <img src={this.state.loadedProduct.imagen} alt="imagen"></img>
                    <h1>{this.state.loadedProduct.descripcion}</h1>
                    <p>{this.state.loadedProduct.precio}</p>
                   
                </div>

            );
        }
        return producto;
    }
}

export default InfoProducto;