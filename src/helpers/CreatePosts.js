import { db } from "../firebaseConfig"

function createNewPost(title, desc) {
  console.log(title, desc)
  db.collection("posts").doc(title).set({
    title: title,
    desc: desc,
    createdAt: new Date().getTime(),
  })
}

export default createNewPost
