import { db } from "../firebaseConfig"

export async function getUserNameFromUserID(userId) {
  const userName = await db
    .collection("users")
    .doc(userId)
    .get()
    .then((doc) => {
      const { username } = doc.data()
      return username
    })
  return userName
}

async function getAllPosts(options = { sortBy: "desc" }) {
  let allPosts = []

  const res = await db
    .collection("posts")
    .orderBy("createdAt", options.sortBy)
    .get()

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    const post = {
      ...result.data(),
      id: result.id,
      username: username,
    }
    allPosts.push(post)
  }

  return allPosts
}

export async function otherPosts(options = { sortBy: "desc" }) {
  let otherPosts = []

  const res = await db
    .collection("posts")
    .orderBy("createdAt", options.sortBy)
    .get()

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    const post = {
      ...result.data(),
      id: result.id,
      username: username,
    }
    otherPosts.push(post)
  }

  return otherPosts
}

export default getAllPosts
