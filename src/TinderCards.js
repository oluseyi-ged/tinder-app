import React from "react"
import TinderCard from "react-tinder-card"
import { useState } from "react"
import "./TinderCards.css"

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "jack dorsey",
      url: "https://dailypost.ng/wp-content/uploads/2021/01/twitter-ceo-jack-dorsey-says-download-signal-as-us-protests-gain-steam-1024x768.jpg.webp",
    },
    {
      name: "jeff bezos",
      url: "https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2021/07/20150224165308-jeff-bezos-amazon.jpeg?resize=1140%2C570&ssl=1",
    },
  ])
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
