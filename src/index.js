import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>, //by wrapping <App /> into <Router>, we can now declare routes in any of this App's components
  document.getElementById("root")
);
