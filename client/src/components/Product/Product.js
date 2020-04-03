import React from "react";
import "./Product.css";
export default function Product(props) {
  return (
    <div className="Product">
      <img src={props.img} />
      {props.name}
    </div>
  );
}
