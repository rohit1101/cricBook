import React from "react"
// import { Link } from "@reach/router"

function Login({ LoginHandler, userId }) {
  console.log(userId.id)
  return (
    <div>
      <h1>CricBook</h1>
      <p>Your Opinion of Cricket!</p>
      <button onClick={LoginHandler}>Login with google</button>
    </div>
  )
}

export default Login
