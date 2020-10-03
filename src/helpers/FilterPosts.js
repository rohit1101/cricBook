// Put a proper readme
// explaining about the app, what you’re using
// your file structure and setup instructions PR description on what is there in here
// And follow a commit discipline like this https://zulip.readthedocs.io/en/latest/contributing/version-control.html
// User once logged in should see all posts of other users. ✅
// Relative time (1 day ago or 2 hrs ago etc) Create a your posts route which displays all my posts

import { db } from "../firebaseConfig"
import { getUserNameFromUserID } from "./allPosts"

async function filterAllPosts(arr) {
  let filterPosts = []
  const res = await db.collection("posts").orderBy("createdAt", "desc").get()

  console.log(filterPosts)

  for (let result of res.docs) {
    const { owner } = result.data()
    const username = await getUserNameFromUserID(owner)

    if (owner !== arr.id) {
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

export default filterAllPosts
