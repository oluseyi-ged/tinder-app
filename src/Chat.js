import React from "react"
import { Avatar } from "@material-ui/core"
import "./Chat.css"

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <Avatar classname="chat__image" alt={name} src={profilePic}></Avatar>
      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  )
}

export default Chat
