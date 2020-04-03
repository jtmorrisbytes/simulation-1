import React from "react";

import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <Switch>
            {/* <Route path="/edit/:id" /> */}
            {/* <Route path='/add' component={Add} /> */}
            <Route path="/" component={Dashboard} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
