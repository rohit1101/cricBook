import React from "react"
import { Link } from "@reach/router"
function Home({ LogOutHandler }) {
  return (
    <div>
      <h1>CricBook</h1>
      <p>Welcome to Home Page</p>
      <Link to="/">
        <button onClick={LogOutHandler}>LogOut</button>
      </Link>
    </div>
  )
}

export default Home

/* <Link to="/">
<button onClick={LogOutHandler}>Log Out</button>
</Link> */
