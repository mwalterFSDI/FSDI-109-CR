import React, { Component } from 'react';
import Product from "./product";
import ProductService from '../services/productService';
import "./catalog.css";


class Catalog extends Component {
    state = {
        catalog: []
     }

    render() {
        
        return (
            <div className="catalog-page">
                <h3><em>
                    This Is Our Amazing Catalog {this.state.catalog.length} Products
                </em></h3>
            

                {this.state.catalog.map((p) => ( <Product key={p.id} data={p}></Product> ))}
            </div>
        );
    }

    componentDidMount(){
        console.log("Load data now")
        // call the serivce, get the catalog and put the catalog in the state
        let service = new ProductService();
        var data = service.getProducts();

        this.setState({ catalog:data });
    }
}

export default Catalog; 
