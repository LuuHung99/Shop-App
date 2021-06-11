import React from "react";

//ConnectedRouter(redux) thay cho Router của Hook
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./home/index";
import About from "./about/index";
import Products from "./products/index";
import Cart from "./cart/index";
import Login from "./authen/login";
import Register from "./authen/register";
import DetailProducts from "./detailProducts/index";
import CheckOut from "./checkout/index";
// const Home = lazy(() => import("./home/index"));
// const About = lazy(() => import("./about/index"));
// const Products = lazy(() => import("./products/index"));
// const Cart = lazy(() => import("./cart/index"));
// const Login = lazy(() => import("./login/index"));


function PageComponents(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/check">
            <CheckOut />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/products/:id">
            <DetailProducts />
          </Route>
        </Switch>
    </Router>
  );
}

export default PageComponents;
