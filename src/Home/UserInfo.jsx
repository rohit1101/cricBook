import React, { useContext } from "react"
import UserContext from "../Context"

function UserInfo({ logOutHandler }) {
  const user = useContext(UserContext)

  return (
    <div>
      <img
        src={user.picture}
        alt="Display_Picture"
        width="100px"
        height="100px"
      />
      <h1>{user.name.split(" ")[0]}'s Pavilion</h1>
      <p>Email: {user.email}</p>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  )
}

export default UserInfo
