import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Chat.css";
import axios from "axios";
import moment from "moment";
import MainChat from "./MainChat";
import File from "./Icon(3).png";
import File2 from "./Icon(4).png";
import Date from "./Date";
import Input from "./Input";

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
  // console.log(post.chats.sender.user_id);
  // const idealOutcome = [
  //   { tweet: { id: "101", author: { id: "1", name: "Michael" } } },
  //   { tweet: { id: "102", author: { id: "2", name: "Gob" } } },
  //   { tweet: { id: "104", author: { id: "3", name: "Buster" } } },
  // ];
  const uniqueAuthors = post.chats.reduce((accumulator, current) => {
    if (
      !accumulator.find(
        (item) => item.sender.user_id === current.sender.user_id
      )
    ) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  // console.log(uniqueAuthors.map((item) => item.sender));
  console.log("yash varshney");
  console.log(uniqueAuthors[0].sender.user_id);
  console.log("yash varshney");
  // ["1", "2", "3"]
  // console.log(idealOutcome.map((item) => item.tweet.author.id));
  // ["1", "2", "3"]
  let i = 1;
  // let user_id;
  return (
    <div className="main">
      <div className="line">
        <hr className="text2" />
        <Date data={formatDate} />
        <hr className="text2" />
      </div>
      {uniqueAuthors.map((unique) => {
        return [
          <>
            <Link to="/chat" state={unique.sender.user_id}>
              <div className="imagess2">
                <img src={unique.sender.image} className="fetch_image" />
                <div className="user">Sender {i++}</div>
              </div>
            </Link>
          </>,
        ];
      })}
      <Input />
      {/* <MainChat /> */}
    </div>
  );
};

export default Chat;
