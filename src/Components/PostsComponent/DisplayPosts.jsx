import React from "react"

class DisplayPosts extends React.Component {
  state = {
    sortValue: "",
  }

  handleSortChange = async ({ target }) => {
    this.setState({ sortValue: target.value })
    this.props.sortPosts(target.value)
  }

  render() {
    const { loading, posts_arr } = this.props

    if (loading) {
      return "loading..."
    }

    return (
      <div>
        <label>
          Sort By:
          <select value={this.state.sortValue} onChange={this.handleSortChange}>
            <option value="desc">Recent Posts</option>
            <option value="asc">Older Posts</option>
          </select>
        </label>

        <div>
          {posts_arr && posts_arr.length ? (
            <div>
              {posts_arr.map((post) => {
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
