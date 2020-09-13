import React from "react"
import createNewPost from "../../helpers/CreatePosts"

class CreatePosts extends React.Component {
  state = {
    titleValue: "",
    descValue: "",
  }

  titleInputHandler = (e) => {
    this.setState({ titleValue: e.target.value })
  }

  descInputHandler = (e) => {
    this.setState({ descValue: e.target.value })
  }

  cricPostBtnHandler = (e) => {
    createNewPost(this.state.titleValue, this.state.descValue)
    this.setState({ titleValue: "", descValue: "" })
  }

  render() {
    return (
      <div>
        <h1>Create a new post</h1>
        <label style={{ display: "block" }}>Title of the Post:</label>
        <input
          type="text"
          value={this.state.titleValue}
          onChange={this.titleInputHandler}
        />
        <label style={{ display: "block" }}>Description of the Post:</label>
        <input
          type="text"
          value={this.state.descValue}
          onChange={this.descInputHandler}
        />
        {this.state.titleValue && this.state.descValue ? (
          <button onClick={this.cricPostBtnHandler}>Create a Cric Post</button>
        ) : (
          <button disabled>Create a Cric Post</button>
        )}
      </div>
    )
  }
}

export default CreatePosts
