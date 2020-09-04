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

  handleAuthClick = (e) => {
    googleAuthHandler()
    // this.setState({ user_arr: user })
    // this.setState({ loginState: !this.state.loginState })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAuthClick}>Login with Google</button>
        {this.state.loginState && <h1>Welcome to home page</h1>}
      </div>
    )
  }
}

export default App
