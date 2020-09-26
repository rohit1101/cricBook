import React from "react"
import { Router } from "@reach/router"
import Login from "./Login/Login"
import AuthorisedHome from "./Home/AuthorisedHome"
import PostDetails from "./Posts/PostDetails"

function Route() {
  return (
    <Router>
      <Login path="/" exact />
      <AuthorisedHome path="/home" exact />
      <PostDetails path="/post/:id" exact />
    </Router>
  )
}

export default Route
