import React from "react";
import Axios from "axios";

import "./Dashboard.css";
import Product from "../Product/Product";
window.axios = Axios;
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  componentDidMount() {
    console.log("component mounted");
    Axios.get("http://localhost:3001/api/products")
      .then((res) => {
        console.log("dashboard response:", res);
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  deleteProduct(id) {
    Axios.delete("http://localhost:3001/api/products/" + id)
      .then(console.log)
      .catch(console.error);
  }
  render() {
    console.log("products", this.state.products);
    return (
      <div className="Dashboard">
        {this.state.products.map((product, index) => {
          return (
            <Product key={index} delete={this.deleteProduct} {...product} />
          );
        })}
      </div>
    );
  }
}
export default Dashboard;
