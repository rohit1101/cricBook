import React from "react"
import getAllPosts from "../../helpers/allPosts"

class Posts extends React.Component {
  state = {
    posts_arr: [],
    loading: false,
  }

  async componentDidMount() {
    const postsFromDb = await getAllPosts()
    console.log(postsFromDb)
    this.setState({ posts_arr: postsFromDb })
    this.setState({ loading: true })
  }

  render() {
    const posts = [...this.state.posts_arr]
    let i = 0
    return (
      <div>
        {this.state.posts_arr ? (
          <div>
            {!this.state.posts_arr.length ? (
              "loading..."
            ) : (
              <div>
                {posts.map((post) => {
                  return (
                    <div key={i++}>
                      <h1>{post.post}</h1>
                      <h3>
                        posted at{" "}
                        {new Date(post.createdAt).toLocaleTimeString()}
                      </h3>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          `No posts to display 😞.`
        )}
      </div>
    )
  }
}

export default Posts
