import React from "react"
import { Router } from "@reach/router"
import Login from "./Login"
import AuthorisedUser from "./Components/HomePageComponent/AuthorisedUser"

function Route() {
  return (
    <Router>
      <Login path="/" exact />
      <AuthorisedUser path="/home" exact />
    </Router>
  )
}

export default Route
