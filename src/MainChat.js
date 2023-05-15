import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainChat.css";
import moment from "moment";
import Pagination from "./Pagination";
import Message2 from "./Message2";
const MainChat = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const baseURL = "//3.111.128.67/assignment/chat?page=0";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      {
        console.log(response.data.chats);
      }
      setCoinsData(response.data.chats);
    });
  }, []);

  if (!post) return null;

  const Date = post.chats[0].time;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  // const date = new Date("2020-07-22T13:22:10.2566789+00:00");
  const formatDate = moment(Date).format("Do MMMM YYYY");
  console.log(formatDate);
  return (
    <div className="chatSection">
      <Pagination
        totalPosts={5}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Message2 post={currentPosts} />
    </div>
  );
};

export default MainChat;
