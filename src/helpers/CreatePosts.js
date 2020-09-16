import { db } from "../firebaseConfig"

async function createNewPost(newPost) {
  const docRef = db.collection("posts").doc()
  await docRef.set({
    ...newPost,
    id: docRef.id,
  })
  return docRef.id
}

export default createNewPost
