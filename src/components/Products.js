import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((item) => {
            let { _id, image, title, price } = item;

            return (
              <li key={_id}>
                <div className="product">
                  <a href={"#" + _id}>
                    <img src={image} alt={title}></img>
                    <p>{title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(price)}</div>
                    <button className="button primary" type="button">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
