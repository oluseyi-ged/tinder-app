import React from "react"
import { useState } from "react"
import { Avatar } from "@material-ui/core"
import "./ChatScreen.css"

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Roy",
      image:
        "https://pbs.twimg.com/profile_images/1417409282199412751/P8iXlJ7x_400x400.jpg",
      message: "Hi Stranger",
    },
    {
      message: "Hey there cutie",
    },
    {
      name: "Roy",
      image:
        "https://pbs.twimg.com/profile_images/1417409282199412751/P8iXlJ7x_400x400.jpg",
      message: "I'm the one for you, yunno?",
    },
  ])

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ROY ON 11/04/2019
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div className="chatScreen__inputForm">
        <form>
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
