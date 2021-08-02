import React from "react"
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person"
import ForumIcon from "@material-ui/icons/Forum"
import { IconButton } from "@material-ui/core"

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kuUJ33NGbosq_TipWJOLVuIJx5DWgKbztg&usqp=CAU"
        alt="tinder logo"
      />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Header
