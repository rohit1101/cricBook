import React from "react"
import getAllPosts from "../../helpers/allPosts"

class Posts extends React.Component {
  state = {
    posts_arr: [],
    loading: false,
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
        {this.state.posts_arr && this.state.posts_arr.length ? (
          <div>
            {posts.map((post) => {
              return (
                <div key={i++}>
                  <h1>{post.post}</h1>
                  <h3>
                    posted at
                    {new Date(post.createdAt).toLocaleTimeString()}
                  </h3>
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

export default Posts

/* <div>
{this.state.loading ? (
  "loading.."
) : (
  <div>
    {this.state.posts_arr && this.state.posts_arr.length ? (
      <div>
        {posts.map((post) => {
          return (
            <div key={i++}>
              <h1>{post.post}</h1>
              <h3>
                posted at
                {new Date(post.createdAt).toLocaleTimeString()}
              </h3>
            </div>
          )
        })}
      </div>
    ) : (
      "No post to display"
    )}
  </div>
)}
</div> */
