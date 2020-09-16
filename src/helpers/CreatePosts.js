import { db } from "../firebaseConfig"

async function createNewPost(newPost) {
  const docRef = db.collection("posts").doc()
  return await docRef.set({
    ...newPost,
    id: docRef.id,
  })
}

export default createNewPost
