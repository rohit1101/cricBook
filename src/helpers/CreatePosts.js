import { db } from "../firebaseConfig"

async function createNewPost(title, desc) {
  return await db
    .collection("posts")
    .add({
      title: title,
      desc: desc,
      createdAt: new Date().getTime(),
    })
    .then((docRef) => docRef.id)
  // const ref = await refId.id
  // console.log(ref)
  // return refId
}

export default createNewPost
