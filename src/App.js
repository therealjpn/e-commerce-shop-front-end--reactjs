import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Productlist from "./component/ProductList";
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import Default from "./component/Default";
import Modal from "./component/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
