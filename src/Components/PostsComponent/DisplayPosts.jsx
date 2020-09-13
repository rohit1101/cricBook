import React from "react"
import getAllPosts from "../../helpers/allPosts"

class DisplayPosts extends React.Component {
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

  // async componentDidUpdate(prevState) {
  //   if (prevState !== this.state.posts_arr) {
  //     const postsFromDb = await getAllPosts()
  //     this.setState({ posts_arr: postsFromDb })
  //   }
  // }

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
    )
  }
}

export default DisplayPosts
