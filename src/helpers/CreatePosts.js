import { db } from "../firebaseConfig"

async function createNewPost(newPost) {
  const docRef = await db.collection("posts").add(newPost)
  return docRef.id
}

export default createNewPost
