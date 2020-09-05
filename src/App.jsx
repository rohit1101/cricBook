import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { googleAuthHandler } from "./AuthConfig"
// import Login from "./Components/LoginComponent/Login"
// import Home from "./Components/HomePageComponent/Home"
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
  }

  handleLogOutClick = (e) => {
    this.setState({ user_arr: [] })
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
          <div>
            <h1>CricBook</h1>
            <p>Welcome to Home Page</p>
            <button onClick={this.handleLogOutClick}>Log Out</button>
          </div>
        ) : (
          <div>
            <h1>CricBook</h1>
            <p>Your Opinion of Cricket</p>
            <button onClick={this.handleAuthClick}>Login with Google</button>
          </div>
        )}
      </div>
    )
  }
}

export default App
