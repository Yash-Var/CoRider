import React from "react";
import Message from "./Message";
const Message2 = ({ post }) => {
  return (
    <div>
      {post.map((posts) => {
        return [
          <>
            {console.log("yash")}
            <Message
              image={posts.sender.image}
              message={posts.message}
              veri={posts.sender.is_kyc_verified}
            />
          </>,
        ];
      })}
    </div>
  );
};

export default Message2;
