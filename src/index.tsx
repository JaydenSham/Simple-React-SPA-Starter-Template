import "@/css/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import { BrowserRouter } from "react-router-dom";

const appRoot = ReactDOM.createRoot(document.getElementById("root")!);

appRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
