import { db } from "../firebaseConfig"
import { getUserNameFromUserID } from "./posts"

export async function createComment(postID, comment) {
  return await db
    .collection("posts")
    .doc(postID)
    .collection("comments")
    .add(comment)
    .then((doc) => doc.id)
}

export async function getAllComments(postID) {
  let allComments = []

  const comments = await db
    .collection("posts")
    .doc(postID)
    .collection("comments")
    .get()

  for (let res of comments.docs) {
    const { owner } = res.data()
    const comment = {
      ...res.data(),
      id: res.id,
      username: await getUserNameFromUserID(owner),
    }
    allComments.push(comment)
  }

  return allComments
}
