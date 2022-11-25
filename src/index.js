import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#main_container"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
