import React from "react"
import { navigate, Redirect } from "@reach/router"

class Home extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  }

  handleLogOutClick = (e) => {
    this.setState({ user_arr: [] })
    navigate("/")
  }

  // componentDidMount() {
  //   if (!localStorage.user_arr) {
  //     // navigate("/")
  //     return <Redirect to="/" />
  //   }
  //   // if (JSON.parse(localStorage.getItem("user_arr")).length === 0) {
  //   //   navigate("/")
  //   // }
  // }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.user_arr) {
      localStorage.setItem("user_arr", JSON.stringify(this.state.user_arr))
    }
  }

  render() {
    return (
      <div>
        {!localStorage.user_arr ? (
          <Redirect to="/" />
        ) : (
          <div>
            <h1>CricBook</h1>
            <p>Welcome to </p>
            <button onClick={this.handleLogOutClick}>Log Out</button>
          </div>
        )}
      </div>
    )
  }
}

export default Home
// return (
// <div>
//   <h1>CricBook</h1>
//   <p>Welcome to </p>
//   <button onClick={this.handleLogOutClick}>Log Out</button>
// </div>
// )
