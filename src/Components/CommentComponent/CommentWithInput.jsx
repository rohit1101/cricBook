import React, { Component } from "react"
import createComment from "../../helpers/createComment"
import getAllComments from "../../helpers/getAllComments"

export default class CommentWithInput extends Component {
  state = {
    comment_arr: [],
    comment: "",
    loading: true,
  }

  commentInputHandler = (e) => {
    this.setState({ comment: e.target.value })
  }

  createCommentHandler = async (e) => {
    const comment = {
      comment: this.state.comment,
      createdAt: new Date().getTime(),
      owner: this.props.postData.owner,
      username: this.props.postData.username,
    }

    const commentId = await createComment(this.props.postData.id, comment)
    const newComment = {
      id: commentId,
      ...comment,
    }

    this.setState({
      comment_arr: [newComment, ...this.state.comment_arr],
      comment: "",
    })
  }

  async componentDidMount() {
    const arr = await getAllComments(this.props.postData.id)
    this.setState({
      comment_arr: [...arr],
      loading: false,
    })
  }

  render() {
    const { comment_arr: comment } = this.state
    console.log(comment)
    if (this.state.loading) {
      return "loading...."
    }
    return (
      <div>
        <label style={{ display: "block" }}>Comments:</label>
        <textarea
          rows="10"
          cols="50"
          onChange={this.commentInputHandler}
          value={this.state.comment}
        />
        <button
          style={{ display: "block" }}
          disabled={!this.state.comment}
          onClick={this.createCommentHandler}
        >
          Submit
        </button>

        {comment && comment.length
          ? comment.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.comment}</h3>
                <p>{new Date(comment.createdAt).toLocaleTimeString()}</p>
                <cite>by {comment.username}</cite>
              </div>
            ))
          : "No comments"}
      </div>
    )
  }
}
