import { db } from "../firebaseConfig"
import { getUserNameFromUserID } from "./allPosts"

async function getUniquePost(id) {
  return await db
    .collection("posts")
    .doc(id)
    .get()
    .then(async (post) => {
      const { owner } = post.data()
      const uniquePost = {
        ...post.data(),
        id: post.id,
        username: await getUserNameFromUserID(owner),
      }
      return uniquePost
    })
}

export default getUniquePost
