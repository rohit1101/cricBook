import React from "react"
import { Router } from "@reach/router"
import App from "./App"
// import Login from "./Components/LoginComponent/Login"
// import Home from "./Components/HomePageComponent/Home"
function Route() {
  return (
    <Router>
      <App path="/" />
      {/* <Login path="/login" />
      <Home path="/home" /> */}
    </Router>
  )
}

export default Route
