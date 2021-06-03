import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./home/index";
import About from "./about/index";
import Products from "./products/index";
import Cart from "./cart/index";
import Login from "./login/index";
import DetailProducts from "./detailProducts/index";
// const Home = lazy(() => import("./home/index"));
// const About = lazy(() => import("./about/index"));
// const Products = lazy(() => import("./products/index"));
// const Cart = lazy(() => import("./cart/index"));
// const Login = lazy(() => import("./login/index"));


function PageComponents(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/products/:id">
            <DetailProducts />
          </Route>
        </Switch>
    </Router>
  );
}

export default PageComponents;
