import { db } from "../firebaseConfig"

function userNameFromID({ owner }) {
  return db
    .collection("users")
    .doc(owner)
    .get()
    .then((doc) => {
      const { username } = doc.data()
      return username
    })
}

async function getAllPosts(options = { sortBy: "desc" }) {
  let allPosts = []

  const res = await db
    .collection("posts")
    .orderBy("createdAt", options.sortBy)
    .get()

  for (let i = 0; i < res.length; i++) {
    const postData = res[i]
    const userName = await userNameFromID(postData.data())
    const post = {
      ...postData.data(),
      id: postData.id,
      userName: userName,
    }
    allPosts.push(post)
  }

  // await res.forEach(async (res) => {
  //   const userName = await userNameFromID(res.data())
  //   const post = {
  //     ...res.data(),
  //     id: res.id,
  //     userName: userName,
  //   }
  //   allPosts.push(post)
  // })

  return allPosts
}

export default getAllPosts
