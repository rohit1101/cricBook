import React from "react"
import { Link } from "@reach/router"
import { getUserPosts } from "../helpers/posts"
import UserContext from "../Context"

export default class YourPosts extends React.Component {
  state = {
    yourPosts_arr: [],
    loading: true,
  }

  static contextType = UserContext

  async componentDidMount() {
    const yourPosts = await getUserPosts(this.context)
    this.setState({ yourPosts_arr: yourPosts, loading: false })
  }

  render() {
    const posts_arr = this.state.yourPosts_arr

    if (this.state.loading) return "loading..."

    return (
      <div>
        <Link to="/">Home</Link> <h1>Your Posts</h1>
        {posts_arr && posts_arr.length ? (
          <div>
            {posts_arr.map((post) => {
              return (
                <div key={post.id}>
                  {" "}
                  <Link to={`/post/${post.id}`}>{post.title}</Link> by{" "}
                  {post.username}
                  <p>
                    created at {new Date(post.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              )
            })}
          </div>
        ) : (
          "No post to display"
        )}
      </div>
    )
  }
}
