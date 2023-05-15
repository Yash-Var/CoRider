import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainChat.css";
const MainChat = () => {
  const baseURL = "//3.111.128.67/assignment/chat?page=0";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  {
    console.log(post);
  }
  return (
    <div className="chatSection">
      {post.chats.map((posts) => {
        return [
          <>
            <div className="main-section">
              <img src={posts.sender.image} className="sender" />
            </div>
            <div className="message">{posts.message}</div>
            <div className="recevier">
              <div className="message2">{posts.message}</div>
            </div>
          </>,
        ];
      })}
    </div>
  );
};

export default MainChat;
