import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Chat from "./Chat";
import Pagination from "./Pagination";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <Chat /> */}
    <Main />
  </BrowserRouter>
);
