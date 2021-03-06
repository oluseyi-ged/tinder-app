import "./App.css"
import Header from "./Header"
import TinderCards from "./TinderCards"
import Chats from "./Chats"
import SwipeButtons from "./SwipeButtons"
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/Roy">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
