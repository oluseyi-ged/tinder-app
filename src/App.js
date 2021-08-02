import "./App.css"
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>a chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Header */}
        {/* Tinder cards */}
        {/* Buttons below cards */}

        {/* Chat screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  )
}

export default App
