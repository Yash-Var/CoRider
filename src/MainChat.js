import React from "react";
import axios from "axios";
import "./MainChat.css";
const MainChat = () => {
  const baseURL = "http://3.111.128.67/assignment/chat?page=0";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
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
      <div className="main-section">
        <img src={post.chats[0].sender.image} className="sender" />
      </div>
      <div className="message">{post.chats[0].message}</div>
    </div>
  );
};

export default MainChat;
