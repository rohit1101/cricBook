import { db } from "../firebaseConfig"

async function getAllPosts() {
  let allPosts = []

  const res = await db.collection("posts").get()
  await res.forEach((res) => allPosts.push(res.data()))
  return allPosts
}

export default getAllPosts
