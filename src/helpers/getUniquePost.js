import { db } from "../firebaseConfig"

async function getUniquePost(id) {
  return await db
    .collection("posts")
    .doc(id)
    .get()
    .then((post) => ({
      ...post.data(),
      id: post.id,
    }))
}

export default getUniquePost
