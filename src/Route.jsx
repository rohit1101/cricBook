import React from "react"
import { Router } from "@reach/router"
import App from "./App"
import Home from "./Components/HomePageComponent/Home"

function Route() {
  return (
    <Router>
      <App path="/" />
      <Home path="/home" />
    </Router>
  )
}

export default Route
