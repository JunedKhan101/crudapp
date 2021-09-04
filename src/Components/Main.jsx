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
            <Route key="add" path="/add" component={Add} />
            <Route key="edit" path="/edit" component={Add} />
        </Switch>
    </Router>
  );
}
