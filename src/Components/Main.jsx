import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import "../CSS/Main.css";

export default function Main() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/add" component={Add} />
        </Switch>
    </Router>
  );
}
