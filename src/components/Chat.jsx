import React from 'react'
import "../App.css"
import Messages from './Messages';
import Input from './Input';

const Chat =() =>{
  return (
    <div className='chat'>
        <div className="chatInfo">
        <span>Berlin</span>
        <div className="chatIcons">
            <i class="fa-regular fa-video"></i>
            <i class="fa-regular fa-plus"></i>
            <i class="fa-solid fa-bars"></i>
        </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat;
