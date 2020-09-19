import { db } from "../firebaseConfig"

export default async function getAllComments(postID) {
  let allComments = []

  await db
    .collection("posts")
    .doc(postID)
    .collection("comments")
    .get()
    .then((doc) => {
      doc.forEach((doc) => {
        const comment = {
          ...doc.data(),
          commentId: doc.id,
        }
        allComments.push(comment)
      })
    })

  return allComments
}
