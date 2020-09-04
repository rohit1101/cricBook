import firebase from "firebase/app"
import "firebase/auth"

export async function googleAuthHandler() {
  let provider = new firebase.auth.GoogleAuthProvider()

  let data = await firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      let token = result.credential.accessToken
      let user = result.user
      console.log(user.email, user.uid, user.displayName)
    })

  return data
}
