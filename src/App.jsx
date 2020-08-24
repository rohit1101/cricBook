import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import "./App.css"
import Query from "./helpers/querying.js"

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
let db = firebase.firestore()

class App extends React.Component {
  state = {
    inpVal: "",
  }

  UserInputHandler = (e) => {
    this.setState({ inpVal: e.target.value })
  }

  UserButtonHandler = (e) => {
    db.collection("posts").doc(this.state.inpVal).set({
      post: this.state.inpVal,
      createdAt: new Date().getTime(),
    })
    this.setState({ inpVal: "" })
    // db.collection("users").doc(this.state.inpVal).set({
    //   name: this.state.inpVal,
    //   createdAt: new Date().getTime(),
    // })
    // this.setState({ inpVal: "" })
  }

  render() {
    return (
      <div className="App">
        <Query
          eventHandler={this.UserInputHandler}
          val={this.state.inpVal}
          btnHandler={this.UserButtonHandler}
        />
      </div>
    )
  }
}

export default App
