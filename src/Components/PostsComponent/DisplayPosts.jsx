import React from "react"
import getAllPosts from "../../helpers/allPosts"
import createNewPost from "../../helpers/CreatePosts"
import sortPosts from "../../helpers/SortPosts"
import getUniquePost from "../../helpers/getUniquePost"
// import SortPosts from "./SortPosts"

class DisplayPosts extends React.Component {
  state = {
    posts_arr: [],
    loading: false,
    titleValue: "",
    descValue: "",
    sortValue: "",
  }

  globalInputHandler = (e) => {
    // const value = e.target.type === "text" ? e.target.value : ""
    // const name = e.target.name
    this.setState({ [e.target.name]: e.target.value })
  }

  cricPostBtnHandler = async (e) => {
    const newPost = {
      title: this.state.titleValue,
      description: this.state.descValue,
      createdAt: new Date().getTime(),
    }
    const id = await createNewPost(newPost)
    const updatePostArr = await getUniquePost(id)
    this.setState({
      titleValue: "",
      descValue: "",
      posts_arr: [...this.state.posts_arr, updatePostArr],
    })
  }

  handleSortChange = async (e) => {
    this.setState({ sortValue: e.target.value })

    if (this.state.sortValue === "desc") {
      const sortedArr = await sortPosts("desc")
      this.setState({ posts_arr: sortedArr })
    }
  }

  // handleClick = async (e) => {
  //   if (this.state.sortValue === "desc") {
  //     const sortedArr = await sortPosts("desc")
  //     this.setState({ posts_arr: sortedArr })
  //   }
  //   if (this.state.sortValue === "asen") {
  //     const sortedArr = await sortPosts("asen")
  //     this.setState({ posts_arr: sortedArr })
  //   }
  // }

  async componentDidMount() {
    this.setState({ loading: true })
    const postsFromDb = await getAllPosts()
    this.setState({ posts_arr: postsFromDb })
    this.setState({ loading: false })
  }

  render() {
    const posts = [...this.state.posts_arr]

    if (this.state.loading) {
      return "loading..."
    }

    return (
      <div>
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
          {this.state.titleValue && this.state.descValue ? (
            <button onClick={this.cricPostBtnHandler}>
              Create a Cric Post
            </button>
          ) : (
            <button disabled>Create a Cric Post</button>
          )}
        </div>

        <label>
          Sort By:
          <select value={this.state.sortValue} onChange={this.handleSortChange}>
            <option value="">Select an option</option>
            <option value="asc">Recent Posts</option>
            <option value="desc">Older Posts</option>
          </select>
          {/* <button onClick={this.handleClick}>Submit</button> */}
        </label>
        {/* post render */}
        <div>
          {this.state.posts_arr && this.state.posts_arr.length ? (
            <div>
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    <h1>{post.title}</h1>
                    <h2>{post.description}</h2>
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
