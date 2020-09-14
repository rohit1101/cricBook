import React from "react"
import getAllPosts from "../../helpers/allPosts"
import createNewPost from "../../helpers/CreatePosts"
import getUniquePost from "../../helpers/getUniquePost"

class DisplayPosts extends React.Component {
  state = {
    posts_arr: [],
    loading: false,
    titleValue: "",
    descValue: "",
  }

  titleInputHandler = (e) => {
    this.setState({ titleValue: e.target.value })
  }

  descInputHandler = (e) => {
    this.setState({ descValue: e.target.value })
  }

  cricPostBtnHandler = async (e) => {
    const id = await createNewPost(this.state.titleValue, this.state.descValue)
    const newPostArr = await getUniquePost(id)
    this.setState({ posts_arr: [...this.state.posts_arr, newPostArr] })
    this.setState({ titleValue: "", descValue: "" })
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const postsFromDb = await getAllPosts()
    this.setState({ posts_arr: postsFromDb })
    this.setState({ loading: false })
  }

  render() {
    const posts = [...this.state.posts_arr]

    let i = 0

    if (this.state.loading) {
      return "loading..."
    }

    return (
      <div>
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
            <button onClick={this.cricPostBtnHandler}>
              Create a Cric Post
            </button>
          ) : (
            <button disabled>Create a Cric Post</button>
          )}
        </div>

        <div>
          {this.state.posts_arr && this.state.posts_arr.length ? (
            <div>
              {posts.map((post) => {
                return (
                  <div key={i++}>
                    <h1>{post.title}</h1>
                    <h2>{post.desc}</h2>
                    <h3>
                      posted at{" "}
                      {new Date(Number(post.createdAt)).toLocaleTimeString()}.
                    </h3>
                  </div>
                )
              })}
            </div>
          ) : (
            "No post to display"
          )}
        </div>
      </div>
    )
  }
}

export default DisplayPosts
