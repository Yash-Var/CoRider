import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Profile from "./components/Profile";
// import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Chats from "./Chats";
import MainChat from "./MainChat";
import Input from "./Input";
function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<MainChat />} />
      </Routes>
      {/* <Input /> */}
    </div>
  );
}
export default Main;
