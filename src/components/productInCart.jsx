import React, { Component } from "react";
import "./productInCart.css";

class ProductInCart extends Component {
  render() {
    return (
    <div className="product-cart">
        <img
            src={"/images/products/" + this.props.data.product.image}
            alt="Product">
        </img>

        <label>{this.props.data.product.title}</label>
        <label>Quantity: {this.props.data.quantity}</label>
        <label>Unit price: {this.props.data.product.price}</label>
      
        <button classname="btn btn-primary btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>
    );
  }
}

export default ProductInCart;
