import React from "react"
import { Router } from "@reach/router"
import Login from "./Login"
import Home from "./Components/HomePageComponent/Home"

function Route() {
  return (
    <Router>
      <Login path="/" exact />
      <Home path="/home" exact />
    </Router>
  )
}

export default Route
