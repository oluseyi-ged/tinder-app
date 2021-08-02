import React from "react"
import Chat from "./Chat"
import "./Chats.css"

function Chats() {
  return (
    <div>
      <Chat
        name="Roy"
        message="I'm the one for you, yunno?"
        timestamp="40 secs ago"
        profilePic="https://pbs.twimg.com/profile_images/1417409282199412751/P8iXlJ7x_400x400.jpg"
      />
      <Chat
        name="Cubana"
        message="Hey, I swiped right on you"
        timestamp="12 mins ago"
        profilePic="https://dailypost.ng/wp-content/uploads/2021/07/Obi-Cubana-2048x1413.jpg"
      />
      <Chat
        name="Buhari"
        message="Would you mind being second lady"
        timestamp="1 hour ago"
        profilePic="https://i2.wp.com/nairametrics.com/wp-content/uploads/2020/03/President-Muhammadu-Buhari.jpg?resize=750%2C375&ssl=1"
      />
      <Chat
        name="Jesus"
        message="Choose Roy. Every other guy is a scam"
        timestamp="1 hour ago"
        profilePic="https://insidearabia.com/wp-content/uploads/2021/04/For-those-seeking-to-understand-the-life-of-Jesus-exploring-the-Middle-East-gives-a-distinct-glimpse-into-the-world-he-grew-up-in.-1200x640.jpg"
      />
    </div>
  )
}

export default Chats
