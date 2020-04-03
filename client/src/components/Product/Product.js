import React from "react";
import "./Product.css";
export default function Product(props) {
  return (
    <div className="Product">
      <img src={props.img} />
      <p className="name">{props.name}</p>
      <p className="price">${props.price}</p>
      <button
        onClick={() => {
          props.delete(props.product_id);
        }}>
        delete
      </button>
    </div>
  );
}
