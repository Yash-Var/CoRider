import React from "react";
import Ver from "./Ver.png";
const Message = ({ image, message, veri }) => {
  {
    console.log(message);
  }
  return (
    <>
      {" "}
      <div className="main-section">
        <img src={image} className="sender" />
        {veri && <img src={Ver} className="Ver" />}
      </div>
      <div className="message">{message}</div>
      <div className="recevier">
        <div className="message2">{message}</div>
      </div>
    </>
  );
};

export default Message;
