import { db } from "../firebaseConfig"

function userLogin(userInfo) {
  db.collection("users").doc(userInfo.name).set({
    username: userInfo.name,
    email: userInfo.email,
    displayImage: userInfo.picture,
    createdAt: new Date().getTime(),
  })
}

export default userLogin
