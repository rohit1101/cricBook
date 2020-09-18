import { db } from "../firebaseConfig"

async function userLogin(userInfo) {
  const docRef = await db.collection("users").add(userInfo)
  return docRef.id
}

export default userLogin
