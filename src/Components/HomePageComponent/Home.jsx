import React from "react"

function Home({ LogOutHandler }) {
  return (
    <div>
      <h1>CricBook</h1>
      <p>Welcome to Home Page</p>
      <button onClick={LogOutHandler}>Log Out</button>
    </div>
  )
}

export default Home
