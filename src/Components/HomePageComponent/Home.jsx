import React from "react";
import { navigate, Redirect } from "@reach/router";

class Home extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")) || [],
  };

  handleLogOutClick = (e) => {
    localStorage.removeItem("user_arr");
    navigate("/");
  };

  render() {
    if (!localStorage.user_arr) {
      return <Redirect to="/" noThrow />;
    }

    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to </p>
        <button onClick={this.handleLogOutClick}>Log Out</button>
      </div>
    );
  }
}

export default Home;
