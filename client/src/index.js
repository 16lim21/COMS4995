/**
 * Index.js that React renders
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Login";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
