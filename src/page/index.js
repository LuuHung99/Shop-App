import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import("./home/home"));


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
        </Switch>
      </Suspense>
    </Router>
  );
}

export default PageComponents;
