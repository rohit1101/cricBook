import React from "react"
import { navigate, Redirect } from "@reach/router"
import UserInfo from "./UserInfo"
import Posts from "../PostsComponent/Posts"

class Home extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  }

  handleLogOutClick = (e) => {
    localStorage.removeItem("user_arr")
    navigate("/")
  }

  render() {
    // if (!localStorage.user_arr) {
    //   return <Redirect to="/" noThrow />
    // }

    return (
      <div>
        {!localStorage.user_arr ? (
          <Redirect to="/" noThrow />
        ) : (
          <div>
            <UserInfo
              userProfile={this.state.user_arr}
              logOutHandler={this.handleLogOutClick}
            />
            <Posts />
          </div>
        )}
      </div>
    )
  }
}

export default Home
