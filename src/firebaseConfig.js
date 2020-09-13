// firebase initialisation
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

let firebaseConfig = {
  apiKey: "AIzaSyCpJg7OzbzUzjH9gEZVEumnTZAhyQhZExQ",
  authDomain: "cricbook-7f579.firebaseapp.com",
  databaseURL: "https://cricbook-7f579.firebaseio.com",
  projectId: "cricbook-7f579",
  storageBucket: "cricbook-7f579.appspot.com",
  messagingSenderId: "769472130779",
  appId: "1:769472130779:web:c60c3dd24d6d5e6d3566fe",
}

firebase.initializeApp(firebaseConfig)

export async function googleAuthHandler() {
  let provider = new firebase.auth.GoogleAuthProvider()

  let data = await firebase.auth().signInWithPopup(provider)

  return data
}

export const db = firebase.firestore()
