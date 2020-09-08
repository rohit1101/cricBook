import React from "react"
import { navigate } from "@reach/router"

class Home extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
    loginStatus: false,
  }

  handleLogOutClick = (e) => {
    this.setState({ user_arr: [] })
    navigate("/")
  }

  componentDidMount() {
    this.setState({ loginStatus: true })
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.user_arr) {
      localStorage.setItem("user_arr", JSON.stringify(this.state.user_arr))
    }
  }

  render() {
    return (
      <div>
        <h1>CricBook</h1>
        <p>Welcome to </p>
        <button onClick={this.handleLogOutClick}>Log Out</button>
      </div>
    )
  }
}

export default Home

/* <Link to="/">
<button onClick={LogOutHandler}>Log Out</button>
</Link> */
