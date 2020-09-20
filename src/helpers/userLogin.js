import { db } from "../firebaseConfig"

function userLogin(userInfo) {
  db.collection("users").doc(userInfo.id).set({
    username: userInfo.name,
    email: userInfo.email,
    displayImage: userInfo.picture,
    createdAt: new Date().getTime(),
    id: userInfo.id,
  })
}

export default userLogin
