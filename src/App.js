import React from "react";
import "./styles.scss";
import { Dashboard, UserPage } from "./components";

import { Route, Switch } from "react-router";
// barev Alik jas 
export default function App() {
  return (
    <div className="App">
      <h1>Select users</h1>
      <div className="flexible jBetween">
        <Dashboard />
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          {/* <Route path="/users" components={ UserPage } /> */}
          <Route path="/:userId" component={UserPage} />
        </Switch>
      </div>
    </div>
  );
}
