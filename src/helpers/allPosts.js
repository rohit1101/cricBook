import { db } from "../firebaseConfig"

async function getAllPosts(options = { sortBy: "desc" }) {
  let allPosts = []

  const res = await db
    .collection("posts")
    .orderBy("createdAt", options.sortBy)
    .get()

  await res.forEach((res) => {
    const post = {
      ...res.data(),
      id: res.id,
    }
    allPosts.push(post)
  })

  return allPosts
}

export default getAllPosts
