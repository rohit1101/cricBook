import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { navigate } from "@reach/router"
import { googleAuthHandler } from "./AuthConfig"
import Login from "./Components/LoginPageComponent/Login"
import Home from "./Components/HomePageComponent/Home"

// import "firebase/firestore"

import firebaseConfig from "./firebaseConfig"
firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  }

  handleAuthClick = async (e) => {
    const userData = await googleAuthHandler()
    const userInfo = Object.values(userData)
    this.setState({ user_arr: [userInfo[2].profile] })
    localStorage.setItem("user_arr", JSON.stringify(this.state.user_arr))
    navigate("/home")
  }

  handleLogOutClick = (e) => {
    this.setState({ user_arr: [] })
    navigate("/login")
  }

  componentDidUpdate = (prevState) => {
    if (prevState.user_arr !== this.state.user_arr) {
      localStorage.setItem("user_arr", JSON.stringify(this.state.user_arr))
    }
  }

  render() {
    return (
      <div>
        {this.state.user_arr.length ? (
          <Home LogOutHandler={this.handleLogOutClick} />
        ) : (
          /* <Login LoginHandler={this.handleAuthClick} /> */
          <div>
            <h1>CricBook</h1>
            <p>Your Opinion of Cricket!</p>
            <button onClick={this.handleAuthClick}>Login with google</button>
          </div>
        )}
      </div>
    )
  }
}

export default App
