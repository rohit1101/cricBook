import React from "react"

function UserInfo({ userProfile, logOutHandler }) {
  return (
    <div>
      {userProfile.map((userData) => {
        return (
          <div>
            <img
              src={userData.picture}
              alt="Display_Picture"
              width="100px"
              height="100px"
            />
            <h1>{userData.name.split(" ")[0]}'s Pavilion</h1>
            <p>Email: {userData.email}</p>
            <button onClick={logOutHandler}>Log Out</button>
          </div>
        )
      })}
    </div>
  )
}

export default UserInfo
