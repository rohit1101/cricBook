import { Link } from "@reach/router"
import React, { Component } from "react"
import getUniquePost from "../../helpers/getUniquePost"
import Comment from "../CommentComponent/Comment"

class PostDetails extends Component {
  state = {
    uniquePost: {},
    loading: true,
  }
  async componentDidMount() {
    const uniquePost = await getUniquePost(this.props.id)
    this.setState({ uniquePost: uniquePost, loading: false })
  }

  render() {
    const post = this.state.uniquePost
    if (this.state.loading) return "loading..."
    return (
      <div>
        <Link to="/home">Home</Link>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <cite>Post by {post.username}</cite>
        <Comment postData={post} />
      </div>
    )
  }
}

export default PostDetails
