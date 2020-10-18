
import { db } from "../firebaseConfig"
import { getUserNameFromUserID } from "./allPosts"

async function filterAllPosts(arr) {
  let filterPosts = []
  const res = await db.collection("posts").orderBy("createdAt", "desc").get()

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    if (owner !== arr.id) {
      const post = {
        ...result.data(),
        id: result.id,
        username: username,
      }
      filterPosts.push(post)
    }
  }
  return filterPosts
}

export default filterAllPosts
