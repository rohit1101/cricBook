import React from "react"
import { navigate, Redirect } from "@reach/router"
import { googleAuthHandler } from "../firebaseConfig"
import userLogin from "../helpers/userLogin"

class Login extends React.Component {
  handleAuthClick = async (e) => {
    const userData = await googleAuthHandler()
    const userInfo = Object.values(userData)
    userLogin(userInfo[2].profile)
    localStorage.setItem("user_arr", JSON.stringify(userInfo[2].profile))
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
            <button
              onClick={this.handleAuthClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login with Google
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Login
