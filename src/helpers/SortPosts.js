import { db } from "../firebaseConfig"

export default async function sortPosts(sortBy) {
  let allPosts = []

  if (sortBy === "desc") {
    const res = await db
      .collection("posts")
      .orderBy("createdAt", sortBy === "desc" ? sortBy : "asc")
      .get()
    const d = await res.forEach((res) => allPosts.push(res.data()))
    console.log(d)
    return allPosts
  }
}
