import React from "react"
import { Link } from "@reach/router"
import filterYourPosts from "../helpers/filterYourPosts"

export default class YourPosts extends React.Component {
  state = {
    user_arr: JSON.parse(localStorage.getItem("user_arr")),
    yourPosts_arr: [],
    loading: true,
  }

  async componentDidMount() {
    const yourPosts = await filterYourPosts(this.state.user_arr)
    this.setState({ yourPosts_arr: yourPosts, loading: false })
  }

  render() {
    console.log(this.props)
    console.log(this.yourPosts)
    const posts_arr = this.state.yourPosts_arr
    if (this.state.loading) {
      return "loading..."
    }
    return (
      <div>
        <Link to="/home">Home</Link> <h1>Your Posts</h1>
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
