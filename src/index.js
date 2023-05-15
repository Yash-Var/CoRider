import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Chat from "./Chat";
import Pagination from "./Pagination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <Chat />
  </React.StrictMode>
);
