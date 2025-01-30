import React from 'react';
import "../App.css";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="../public/berlin.jpeg" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hi, how are you?</p>
        <img src="https://i.pinimg.com/736x/5b/73/26/5b73263ee7c1836c145ca404bb999736.jpg" alt="" />
        {/* Embedded YouTube Video */}
        {/* <iframe 
         
          src="https://www.youtube.com/embed/Zq5-8tQ9eOQ" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default Message;
