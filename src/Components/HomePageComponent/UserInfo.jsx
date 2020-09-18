import React from "react"

function UserInfo({ userProfile, logOutHandler }) {
  return (
    <div>
      <div key={userProfile.id}>
        <img
          src={userProfile.picture}
          alt="Display_Picture"
          width="100px"
          height="100px"
        />
        <h1>{userProfile.name.split(" ")[0]}'s Pavilion</h1>
        <p>Email: {userProfile.email}</p>
        <button onClick={logOutHandler}>Log Out</button>
      </div>
    </div>
  )
}

export default UserInfo
