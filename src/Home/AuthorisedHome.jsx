import React from "react"
import { Link, navigate } from "@reach/router"
import UserInfo from "./UserInfo"
import DisplayPosts from "../Posts/DisplayPosts"
import CreatePostInput from "../Posts/CreatePostInput"

import { getAllPosts, createNewPost } from "../helpers/posts"
import UserContext from "../Context"
import { LOGIN_PAGE } from "../constants"

class AuthorisedHome extends React.Component {
  state = {
    loading: true,
    posts_arr: [],
  }

  static contextType = UserContext

  handleLogOutClick = (e) => {
    localStorage.removeItem("user_arr")
    navigate(LOGIN_PAGE)
  }

  async componentDidMount() {
    const postsFromDb = await getAllPosts({ user: this.context })
    this.setState({ posts_arr: postsFromDb, loading: false })
  }

  createNewPost = async (title, desc) => {
    const newPost = {
      title: title,
      description: desc,
      createdAt: new Date().getTime(),
      owner: this.context.id,
      username: this.context.name,
      upvotes: [],
      downvotes: [],
    }

    const id = await createNewPost(newPost)
    const newPostWithId = { ...newPost, id }

    this.setState({
      posts_arr: [newPostWithId, ...this.state.posts_arr],
    })
    navigate(`/post/${id}`)
  }

  sortPosts = async (sortBy) => {
    const sortedArr = await getAllPosts({ sortBy, user: this.context })
    this.setState({ posts_arr: sortedArr })
  }

  render() {
    return (
      <div>
        <div>
            <UserInfo logOutHandler={this.handleLogOutClick} />

            <Link to={`/yourposts`}>Your Posts</Link>

            <CreatePostInput createCricPost={this.createNewPost} />

            <DisplayPosts
              posts_arr={this.state.posts_arr}
              loading={this.state.loading}
              sortPosts={this.sortPosts}
            />
        </div>
      </div>
    )
  }
}

export default AuthorisedHome
