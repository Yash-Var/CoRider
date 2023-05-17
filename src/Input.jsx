import React from "react";
import File from "./Icon(3).png";
import File2 from "./Icon(4).png";
import "./Chat.css";
function Input() {
  return (
    <div>
      {" "}
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
}

export default Input;
