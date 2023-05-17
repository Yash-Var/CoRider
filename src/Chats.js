import React from "react";
import App from "./App";
import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
import "./Chat.css";
function Chats(props) {
  const location = useLocation();
  const propsData = location.state;
  console.log("yash is good");
  console.log(propsData);
  console.log("yash is gohhod");
  return (
    <div>
      <App />
      {/* <Input /> */}
    </div>
  );
}

export default Chats;
