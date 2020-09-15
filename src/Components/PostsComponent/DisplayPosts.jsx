import React from "react"
import getAllPosts from "../../helpers/allPosts"
import createNewPost from "../../helpers/CreatePosts"
import getUniquePost from "../../helpers/getUniquePost"
import sortPosts from "../../helpers/SortPosts"
// import SortPosts from "./SortPosts"

class DisplayPosts extends React.Component {
  state = {
    posts_arr: [],
    loading: false,
    titleValue: "",
    descValue: "",
    sortValue: "",
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
    this.setState({
      posts_arr: [...this.state.posts_arr, newPostArr],
      titleValue: "",
      descValue: "",
    })
  }

  handleSortChange = async (e) => {
    this.setState({ sortValue: e.target.value })

    if (this.state.sortValue === "desc") {
      const sortedArr = await sortPosts("desc")
      this.setState({ posts_arr: sortedArr })
    }
    // if (this.state.sortValue === "asen") {
    // const sortedArr = await sortPosts()
    // this.setState({ posts_arr: sortedArr })
    // }
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
            type="text"
            onChange={this.titleInputHandler}
            value={this.state.titleValue}
            placeholder="Fancy Title"
          />
          <label style={{ display: "block" }}>Description of the Post:</label>
          <input
            type="text"
            onChange={this.descInputHandler}
            value={this.state.descValue}
            placeholder="Fancy Caption"
          />
          {this.state.titleValue && this.state.descValue ? (
            <button onClick={this.state.cricPostBtnHandler}>
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
        <div>
          {this.state.posts_arr && this.state.posts_arr.length ? (
            <div>
              {posts.map((post) => {
                return (
                  <div key={post.createdAt}>
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
