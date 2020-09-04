import React from "react"
import firebase from "firebase/app"
import "firebase/auth"
import { googleAuthHandler } from "./AuthConfig"
// import "firebase/firestore"

import firebaseConfig from "./firebaseConfig"
firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  state = {
    loginState: false,
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  }

  handleAuthClick = async (e) => {
    const userData = await googleAuthHandler()

    const userInfo = Object.values(userData)
    console.log(userInfo[2])
    this.setState({ user_arr: [userInfo[2].profile] })
    localStorage.setItem("user_arr", JSON.stringify([userInfo[2].profile]))
    this.setState({ loginState: true })
  }

  render() {
    return (
      <div>
        {this.state.user_arr.length ? (
          <h1>Welcome to home page</h1>
        ) : (
          <button onClick={this.handleAuthClick}>Login with Google</button>
        )}
      </div>
    )
  }
}

export default App
