import { db } from "../firebaseConfig"

async function getAllPosts() {
  return await db
    .collection("users")
    .doc("Penny")
    .get()
    .then((doc) => {
      return doc.data()
    })
}

export default getAllPosts
