import { db } from "../firebaseConfig"

async function getAllPosts() {
  let allPosts = []
  // await db
  //   .collection("posts")
  //   .get()
  //   .then((doc) => {
  //     doc.forEach((doc) => {
  //       allPosts.push(doc.data())
  //     })
  //   })

  const res = await db.collection("posts").get()
  await res.forEach((res) => allPosts.push(res.data()))
  return allPosts
}

export default getAllPosts
