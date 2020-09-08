import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { navigate } from "@reach/router"
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
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user_arr")).length) {
      navigate("/home", { replace: true })
    }
    if (!JSON.parse(localStorage.getItem("user_arr")).length) {
      navigate("/", { replace: true })
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>CricBook</h1>
          <p>Your Opinion of Cricket!</p>
          <button onClick={this.handleAuthClick}>Login with Google</button>
        </div>
      </div>
    )
  }
}

export default Login
