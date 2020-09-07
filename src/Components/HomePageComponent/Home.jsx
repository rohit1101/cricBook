import React from "react"
import { Link } from "@reach/router"
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

/* <Link to="/">
<button onClick={LogOutHandler}>Log Out</button>
</Link> */
