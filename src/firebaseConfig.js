// firebase initialisation
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

let firebaseConfig = {
  apiKey: "AIzaSyCXhO2DyHb7XF8xhTIq34yqkDrDQHGQpo8",
  authDomain: "firestoreproject-1ce2d.firebaseapp.com",
  databaseURL: "https://firestoreproject-1ce2d.firebaseio.com",
  projectId: "firestoreproject-1ce2d",
  storageBucket: "firestoreproject-1ce2d.appspot.com",
  messagingSenderId: "111051122791",
  appId: "1:111051122791:web:5786164e181d6fa9e74cc2",
}

firebase.initializeApp(firebaseConfig)

export async function googleAuthHandler() {
  let provider = new firebase.auth.GoogleAuthProvider()

  let data = await firebase.auth().signInWithPopup(provider)

  return data
}

export const db = firebase.firestore()
