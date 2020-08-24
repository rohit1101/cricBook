db.collection("posts").doc(this.state.inpVal).set({
  post: this.state.inpVal,
  createdAt: new Date().getTime(),
})

// .then((docRef) => console.log(docRef))
this.setState({ inpVal: "" })
// db.collection("users").doc(this.state.inpVal).set({
//   name: this.state.inpVal,
//   createdAt: new Date().getTime(),
// })
// this.setState({ inpVal: "" })
