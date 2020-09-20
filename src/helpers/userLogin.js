import { db } from "../firebaseConfig"

<<<<<<< HEAD
async function userLogin(userInfo) {
  const docRef = await db.collection("users").add(userInfo)
  return docRef.id
=======
function userLogin(userInfo) {
  db.collection("users").doc(userInfo.name).set({
    username: userInfo.name,
    email: userInfo.email,
    displayImage: userInfo.picture,
    createdAt: new Date().getTime(),
    id: userInfo.id,
  })
>>>>>>> create post bug
}

export default userLogin
