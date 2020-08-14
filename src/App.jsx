import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import DogWidget from "./DogWidget";

const App = () => (
  <div>
    <DogWidget />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
