import { db } from "../firebaseConfig"
// import { getUserNameFromUserID } from "./allPosts"

async function FilterPosts(user) {
  let filteredPosts = []

  await db
    .collection("posts")
    .get()
    .then((snapShot) => {
      snapShot.docs.filter((filPosts) => {
        return filPosts.data().username !== user.name
          ? filteredPosts.push(filPosts.data())
          : ""
      })
    })

  console.log(filteredPosts)

  return filteredPosts
}

export default FilterPosts
