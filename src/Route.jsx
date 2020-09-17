import React from "react"
import { Router } from "@reach/router"
import Login from "./Login"

import AuthorisedHome from "./Components/HomePageComponent/AuthorisedHome"

function Route() {
  return (
    <Router>
      <Login path="/" exact />
      <AuthorisedHome path="/home" exact />
    </Router>
  )
}

export default Route
