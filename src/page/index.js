import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import("./home/index"));
const About = lazy(() => import("./about/index"));
const Products = lazy(() => import("./products/index"));
const Cart = lazy(() => import("./cart/index"));
const Login = lazy(() => import("./login/index"));


function PageComponents(props) {
  return (
    <Router>
      <Suspense
        fallback={
          <h1 style={{ textAlign: "center", marginTop: "40px" }}>
            Loading ...
          </h1>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default PageComponents;
