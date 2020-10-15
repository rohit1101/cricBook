import React from "react"
import { navigate, Redirect } from "@reach/router"
import { googleAuthHandler } from "../firebaseConfig"
import userLogin from "../helpers/userLogin"
import styles from "./Login.module.scss"
import image from "../authentication.svg"
import logo from "../logo.png"
class Login extends React.Component {
  handleAuthClick = async () => {
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
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <p>
                  Cricbook helps you connect and share about cricket around the
                  world.
                </p>
                <button
                  onClick={this.handleAuthClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Login with Google
                </button>
              </div>

              <div className={styles.image}>
                <img src={image} alt="login" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Login
