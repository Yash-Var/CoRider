import React from "react";
import "./Chat.css";
import MainChat from "./MainChat";
import File from "./Icon(3).png";
import File2 from "./Icon(4).png";
const Chat = () => {
  return (
    <div className="main">
      <div className="line">
        <hr className="text2" />
        <div className="text3">12 JAN,2023</div>
        <hr className="text2" />
      </div>
      <MainChat />
      <div className="field">
        <div className="input">
          <input
            type="text"
            className="input-text"
            placeholder="Reply to @Rohit Yadav"
          />
          <div className="fileIcons">
            <img src={File} />
            <img src={File2} />
          </div>
        </div>
      </div>
      <div className="name">
        <hr />
      </div>
    </div>
  );
};

export default Chat;
