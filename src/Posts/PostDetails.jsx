import { Link } from "@reach/router"
import React, { Component } from "react"
import { getUniquePost } from "../helpers/posts"
import CommentWithInput from "../Comments/CommentWithInput"
import { downVotes, upVotes } from "../helpers/posts"
import UserContext from "../Context"

class PostDetails extends Component {
  state = {
    uniquePost: {},
    loading: true,
  }

  static contextType = UserContext

  async componentDidMount() {
    const uniquePost = await getUniquePost(this.props.id)
    this.setState({ uniquePost, loading: false })
  }

  handleUpVotes = async (e) => {
    const { id } = this.context

    const upVote = [...this.state.uniquePost.upvotes]
    if (!upVote.includes(id)) {
      upVote.push(id)
    }
    this.setState({ uniquePost: { ...this.state.uniquePost, upvotes: upVote } })
    await upVotes(this.state.uniquePost.id, upVote)
  }

  handleDownVotes = async (e) => {
    const { id } = this.context

    const downVote = [...this.state.uniquePost.downvotes]
    if (!downVote.includes(id)) {
      downVote.push(id)
    }
    this.setState({
      uniquePost: { ...this.state.uniquePost, downvotes: downVote },
    })
    await downVotes(this.state.uniquePost.id, downVote)
  }

  decider = (type) => async () => {
    if (type === 'upvote') {
      this.handleUpVotes()
    } else if (type === 'downvote') {
      this.handleDownVotes()
    }
  }

  render() {
    const post = this.state.uniquePost
    if (this.state.loading) return "loading..."
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to={`/yourposts`}>Your Posts</Link>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <cite style={{ display: "block" }}>Post by {post.username}</cite>
        {post.upvotes.length} Likes {post.downvotes.length} Dislikes
        <button onClick={this.decider('upvote')}>like</button>
        <button onClick={this.decider('downvote')} value="dislike">
          dislike
        </button>
        <CommentWithInput postData={post} />
      </div>
    )
  }
}

export default PostDetails
