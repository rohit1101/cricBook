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
    user_arr: [],
  }

  handleAuthClick = async (e) => {
    googleAuthHandler()

    const userData = await googleAuthHandler()
    console.log(userData)
    const userInfo = Object.values(userData)
    console.log(userInfo[2])

    this.setState({ user_arr: [userInfo[2].profile] })
    this.setState({ loginState: true })
  }

  render() {
    return (
      <div>
        {this.state.loginState ? (
          <h1>Welcome to home page</h1>
        ) : (
          <button onClick={this.handleAuthClick}>Login with Google</button>
        )}
      </div>
    )
  }
}

export default App
