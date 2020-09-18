import React, { Component } from "react"
import getUniquePost from "../../helpers/getUniquePost"

class PostDetails extends Component {
  state = {
    uniquePost: [],
    loading: true,
  }
  async componentDidMount() {
    console.log(this.props)
    const uniquePost = await getUniquePost(this.props.id)
    this.setState({ uniquePost: uniquePost, loading: false })
  }

  render() {
    const post = this.state.uniquePost
    if (this.state.loading) return "laoding..."
    return (
      <div>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </div>
    )
  }
}

export default PostDetails
