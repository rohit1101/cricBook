import React from "react"
import { navigate, Redirect } from "@reach/router"
import { googleAuthHandler } from "./firebaseConfig"
import userLogin from "./helpers/userLogin"

class Login extends React.Component {
  handleAuthClick = async (e) => {
    const userData = await googleAuthHandler()
    const userInfo = Object.values(userData)
    const userID = await userLogin(userInfo[2].profile)
    console.log(userID)
    const authUser = {
      ...userInfo[2].profile,
      userID: userID,
    }
    localStorage.setItem("user_arr", JSON.stringify(authUser))
    navigate("/home")
  }

  render() {
    return (
      <div>
        {localStorage.user_arr ? (
          <Redirect to="/home" noThrow />
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
