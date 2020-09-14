import React from "react"
import { navigate, Redirect } from "@reach/router"
import UserInfo from "./UserInfo"
import DisplayPosts from "../PostsComponent/DisplayPosts"

class Home extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  }

  handleLogOutClick = (e) => {
    localStorage.removeItem("user_arr")
    navigate("/")
  }

  render() {
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
            <DisplayPosts />
          </div>
        )}
      </div>
    )
  }
}

export default Home
