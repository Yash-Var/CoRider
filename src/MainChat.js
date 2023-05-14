import React, { useState, useEffect } from "react";
import "./MainChat.css";
const MainChat = () => {
  const url = "http://3.111.128.67/assignment/chat?page=0";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <div className="main-section">
        <img src={data.chats[0].sender.image} className="sender" />
      </div>
    </div>
  );
};

export default MainChat;
