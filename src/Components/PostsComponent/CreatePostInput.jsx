import React from "react"

class CreatePostInput extends React.Component {
  state = {
    titleValue: "",
    descValue: "",
  }

  globalInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Create a new post</h1>
        <label style={{ display: "block" }}>Title of the Post:</label>
        <input
          name="titleValue"
          type="text"
          onChange={this.globalInputHandler}
          value={this.state.titleValue}
          placeholder="Fancy Title"
        />
        <label style={{ display: "block" }}>Description of the Post:</label>
        <input
          name="descValue"
          type="text"
          onChange={this.globalInputHandler}
          value={this.state.descValue}
          placeholder="Fancy Caption"
        />
        <button
          disabled={
            !(this.state.titleValue.length && this.state.descValue.length)
          }
          onClick={() => {
            this.props.createCricPost(
              this.state.titleValue,
              this.state.descValue
            )
            this.setState({ titleValue: "", descValue: "" })
          }}
        >
          Create a Cric Post
        </button>
      </div>
    )
  }
}

export default CreatePostInput
