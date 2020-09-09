import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { navigate, Redirect } from "@reach/router"
import { googleAuthHandler } from "./AuthConfig"

import firebaseConfig from "./firebaseConfig"
firebase.initializeApp(firebaseConfig)

class Login extends React.Component {
  state = {}

  handleAuthClick = async (e) => {
    const userData = await googleAuthHandler()
    const userInfo = Object.values(userData)
    localStorage.setItem("user_arr", JSON.stringify([userInfo[2].profile]))
    navigate("/home")
  }

  // componentDidMount() {
  //   if (localStorage.user_arr) {
  //     // navigate("/home")
  //     return <Redirect to="/home" />
  //   }
  //   // if (JSON.parse(localStorage.getItem("user_arr")).length !== 0) {
  //   //   navigate("/home")
  //   // }
  // }

  render() {
    return (
      <div>
        {localStorage.user_arr ? (
          <Redirect to="/home" />
        ) : (
          <div>
            <h1>CricBook</h1>
            <p>Your Opinion of Cricket!</p>
            <button onClick={this.handleAuthClick}>Login with Google</button>
          </div>
        )}
      </div>
    )
  }
}

export default Login
