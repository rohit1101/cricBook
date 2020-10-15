// firebase initialisation
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

let firebaseConfig = {
  apiKey: "AIzaSyCVV_5TyEljqfEJnyTxwPv-92NERKSCgog",
  authDomain: "cricbook-v2.firebaseapp.com",
  databaseURL: "https://cricbook-v2.firebaseio.com",
  projectId: "cricbook-v2",
  storageBucket: "cricbook-v2.appspot.com",
  messagingSenderId: "502775188257",
  appId: "1:502775188257:web:556ea7c535b37887a48c60"
}

firebase.initializeApp(firebaseConfig)

export async function googleAuthHandler() {
  let provider = new firebase.auth.GoogleAuthProvider()
  let data = await firebase.auth().signInWithPopup(provider)

  return data
}

export const db = firebase.firestore()
