import firebase from "firebase/app"
import "firebase/auth"

export async function googleAuthHandler() {
  let provider = new firebase.auth.GoogleAuthProvider()

  let data = await firebase.auth().signInWithPopup(provider)

  return data
}
