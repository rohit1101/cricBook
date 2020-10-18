import React from "react"
import { Router } from "@reach/router"
import Login from "./Login/Login"
import AuthorisedHome from "./Home/AuthorisedHome"
import PostDetails from "./Posts/PostDetails"
import YourPosts from "./Posts/YourPosts"
import { UserProvider } from "./Context"
import Authenticator from "./Authenticator"
import { LOGIN_PAGE } from "./constants"


function Route() {
  const userArr = JSON.parse(localStorage.getItem("user_arr"))
  return (
    <UserProvider value={userArr}>
      <Router>
        <Login path={LOGIN_PAGE} exact />

        <Authenticator path="/">
          <AuthorisedHome path="/" exact />
          <PostDetails path="post/:id"  exact />
          <YourPosts path="yourposts" exact />
        </Authenticator>
      </Router>
    </UserProvider>
  )
}

export default Route
