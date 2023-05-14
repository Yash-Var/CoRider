import React from "react";
import "./Chat.css";
import MainChat from "./MainChat";
const Chat = () => {
  return (
    <div className="main">
      <div className="line">
        <hr className="text2" />
        <div className="text3">12 JAN,2023</div>
        <hr className="text2" />
      </div>
      <MainChat />
    </div>
  );
};

export default Chat;
