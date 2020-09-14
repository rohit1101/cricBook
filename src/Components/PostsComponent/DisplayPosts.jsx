import React from "react"
import getAllPosts from "../../helpers/allPosts"
import createNewPost from "../../helpers/CreatePosts"
import getUniquePost from "../../helpers/getUniquePost"
import CreatePost from "./CreatePost"
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

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ sortValue: e.target.value })
  }

  handleClick = async (e) => {
    if (this.state.sortValue === "desc") {
      const sortedArr = await sortPosts("desc")
      this.setState({ posts_arr: sortedArr })
    }
    if (this.state.sortValue === "asen") {
      const sortedArr = await sortPosts("asen")
      this.setState({ posts_arr: sortedArr })
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const postsFromDb = await getAllPosts()
    this.setState({ posts_arr: postsFromDb })
    this.setState({ loading: false })
  }

  render() {
    const posts = [...this.state.posts_arr]

    // let i = 0

    if (this.state.loading) {
      return "loading..."
    }

    return (
      <div>
        <CreatePost
          title={this.state.titleValue}
          desc={this.state.descValue}
          titleInpHandler={this.titleInputHandler}
          descInpHandler={this.descInputHandler}
          createBtnHandler={this.cricPostBtnHandler}
        />

        <label>
          Sort By:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="select an option">Select an option</option>
            <option value="asen">Recent Posts</option>
            <option value="desc">Older Posts</option>
          </select>
          <button onClick={this.handleClick}>Submit</button>
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
