import React, { Component } from "react"
import createComment from "../../helpers/createComment"
import getAllComments from "../../helpers/getAllComments"

export default class Comment extends Component {
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
      postID: this.props.postID,
    }
    const commentId = await createComment(this.props.postID, comment)
    const newComment = {
      commentId: commentId,
      ...comment,
    }

    this.setState({
      comment_arr: [newComment, ...this.state.comment_arr],
      comment: "",
    })
  }

  async componentDidMount() {
    const arr = await getAllComments(this.props.postID)
    this.setState({
      comment_arr: [...arr, ...this.state.comment_arr],
      loading: false,
    })
  }

  render() {
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

        {this.state.comment_arr && this.state.comment_arr.length
          ? this.state.comment_arr.map((comment) => {
              return (
                <div key={comment.commentId}>
                  <h3>{comment.comment}</h3>
                  <p>{new Date(comment.createdAt).toLocaleTimeString()}</p>
                </div>
              )
            })
          : "No comments"}
      </div>
    )
  }
}
