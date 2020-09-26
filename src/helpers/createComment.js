import { db } from "../firebaseConfig"

export default async function createComment(postID, comment) {
  return await db
    .collection("posts")
    .doc(postID)
    .collection("comments")
    .add(comment)
    .then((doc) => doc.id)
}
