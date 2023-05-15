import React from "react";

const Message = ({ image, message }) => {
  {
    console.log(message);
  }
  return (
    <>
      {" "}
      <div className="main-section">
        <img src={image} className="sender" />
      </div>
      <div className="message">{message}</div>
      <div className="recevier">
        <div className="message2">{message}</div>
      </div>
    </>
  );
};

export default Message;
