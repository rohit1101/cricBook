import React from "react"
import { Link, navigate, Redirect } from "@reach/router"
import UserInfo from "./UserInfo"
import DisplayPosts from "../Posts/DisplayPosts"
import createNewPost from "../helpers/CreatePosts"
import CreatePostInput from "../Posts/CreatePostInput"
import getAllPosts from "../helpers/allPosts"
import filterAllPosts from "../helpers/FilterPosts"
import { UserProvider } from "../Context"

class AuthorisedHome extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")),
    loading: true,
    posts_arr: [],
  }

  handleLogOutClick = (e) => {
    localStorage.removeItem("user_arr")
    navigate("/")
  }

  async componentDidMount() {
    const postsFromDb = await filterAllPosts(this.state.user_arr)
    this.setState({ posts_arr: postsFromDb, loading: false })
  }

  createNewPost = async (title, desc) => {
    const newPost = {
      title: title,
      description: desc,
      createdAt: new Date().getTime(),
      owner: this.state.user_arr.id,
      username: this.state.user_arr.name,
    }

    const id = await createNewPost(newPost)
    const newPostWithId = { ...newPost, id }

    this.setState({
      posts_arr: [newPostWithId, ...this.state.posts_arr],
    })
    navigate(`/post/${id}`)
  }

  sortPosts = async (sortBy) => {
    const sortedArr = await getAllPosts({ sortBy })
    this.setState({ posts_arr: sortedArr })
  }

  render() {
    return (
      <div>
        {!localStorage.user_arr ? (
          <Redirect to="/" noThrow />
        ) : (
          <div>
            <UserProvider value={this.state.user_arr}>
              <UserInfo logOutHandler={this.handleLogOutClick} />
            </UserProvider>

            <Link to={`/posts/${this.state.user_arr.name}`}>Your Posts</Link>
            <CreatePostInput createCricPost={this.createNewPost} />
            <UserProvider value={this.state.user_arr}>
              <DisplayPosts
                posts_arr={this.state.posts_arr}
                loading={this.state.loading}
                sortPosts={this.sortPosts}
              />
            </UserProvider>
          </div>
        )}
      </div>
    )
  }
}

export default AuthorisedHome
