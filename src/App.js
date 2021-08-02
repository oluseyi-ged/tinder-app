import "./App.css"
import Header from "./Header"
import TinderCards from "./TinderCards"
import Chats from "./Chats"
import SwipeButtons from "./SwipeButtons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
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
