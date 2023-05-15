import React, { useEffect, useState } from "react";
import "./Chat.css";
import axios from "axios";
import moment from "moment";
import MainChat from "./MainChat";
import File from "./Icon(3).png";
import File2 from "./Icon(4).png";
import Date from "./Date";
const Chat = () => {
  const baseURL = "//3.111.128.67/assignment/chat?page=0";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const Dat = post.chats[0].time;
  const formatDate = moment(Dat).format("Do MMMM YYYY");
  console.log(formatDate);
  return (
    <div className="main">
      <div className="line">
        <hr className="text2" />
        <Date data={formatDate} />
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
