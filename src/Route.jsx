import React from "react"
import { Router } from "@reach/router"
import App from "./App"
// import Login from "./Components/LoginPageComponent/Login"
// import Home from "./Components/HomePageComponent/Home"

function Route() {
  return (
    <Router>
      <App path="/" />
    </Router>
  )
}

export default Route
