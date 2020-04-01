import React from "react";
import "./styles.scss";
import {
  Dashboard
} from './components';

export default function App() {
  return (
    <div className="App">
      <h1>Select users</h1>
      <div className="flexible jBetween">
      <Dashboard />
      </div>
    </div>
  );
}
