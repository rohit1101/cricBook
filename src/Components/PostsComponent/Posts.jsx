import React from "react"
import getAllPosts from "../../helpers/allPosts"

class Posts extends React.Component {
  async componentDidMount() {
    const d = await getAllPosts()
    console.log(d)
  }
  render() {
    return <p>All posts</p>
  }
}



export default Posts
