import { db } from "../firebaseConfig"

export default async function sortPosts(sortBy) {
  let allPosts = []

  if (sortBy === "asen") {
    const res = await db.collection("posts").orderBy("createdAt").get()
    await res.forEach((res) => allPosts.push(res.data()))
    return allPosts
  }

  const res = await db.collection("posts").orderBy("createdAt", sortBy).get()
  await res.forEach((res) => allPosts.push(res.data()))
  return allPosts
}
