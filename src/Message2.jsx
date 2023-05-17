import React from "react";
import Message from "./Message";
const Message2 = ({ post }) => {
  return (
    <div>
      <Message
        image={post.sender.image}
        message={post.message}
        veri={post.sender.is_kyc_verified}
      />
    </div>
  );
};

export default Message2;
