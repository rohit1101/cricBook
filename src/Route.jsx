import React from "react"
import { Router } from "@reach/router"
import Login from "./Login"
import AuthorisedHome from "./Components/HomePageComponent/AuthorisedHome"
import PostDetails from "./Components/PostsComponent/PostDetails"

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
