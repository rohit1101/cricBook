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

export async function getAllPosts(options = { sortBy: "desc" }) {
  let allPosts = []

  const res = await db
    .collection("posts")
    .orderBy("createdAt", options.sortBy)
    .get()

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    if (options.user && owner === options.user.id) {
      continue
    }

    const post = {
      ...result.data(),
      id: result.id,
      username: username,
    }

    allPosts.push(post)
  }

  return allPosts
}

export async function getUserPosts(user) {
  let filterPosts = []
  const res = await db.collection("posts").orderBy("createdAt", "desc").get()

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    if (owner === user.id) {
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

export async function getUniquePost(id) {
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

export async function createNewPost(newPost) {
  const docRef = await db.collection("posts").add(newPost)
  return docRef.id
}

export async function upVotes(postID,newUpVotesArr) {
        return await db.collection('posts').doc(postID).update({
        upvotes: newUpVotesArr
    })
}

export async function downVotes(postID,newDownVotesArr) {
    return await db.collection('posts').doc(postID).update({
        downvotes: newDownVotesArr
    })
}