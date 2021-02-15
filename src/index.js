import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-animated-slider/build/horizontal.css";
import "react-bootstrap";
import "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
