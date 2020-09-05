import React from "react"
import { Link } from "@reach/router"
function Login({ LoginHandler, userId }) {
  return (
    <div>
      <h1>CricBook</h1>
      <p>Your Opinion of Cricket</p>
      <Link to="/home">
        <button onClick={LoginHandler}>Log Out</button>
      </Link>
    </div>
  )
}

export default Login
