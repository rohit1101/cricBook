import { db } from "../firebaseConfig"

async function getAllPosts() {
  let allPosts = []
  await db
    .collection("posts")
    .get()
    .then((doc) => {
      doc.forEach((doc) => {
        allPosts.push(doc.data())
      })
    })
  return allPosts
}

export default getAllPosts
