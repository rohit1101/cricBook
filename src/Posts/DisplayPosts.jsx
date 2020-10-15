import { Link } from "@reach/router"
import React from "react"
import { UserConsumer } from "../Context"

class DisplayPosts extends React.Component {
  state = {
    sortValue: "",
  }

  handleSortChange = ({ target }) => {
    this.setState({ sortValue: target.value })
    this.props.sortPosts(target.value)
  }
  static contextType = UserConsumer

  render() {
    const { loading, posts_arr } = this.props
    console.log(this.context)

    if (loading) {
      return "loading..."
    }
    const formatter = new Intl.DateTimeFormat("en", {
      timeStyle: "medium",
      dataStyle: "short",
    })

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
                    <Link to={`/post/${post.id}`}>{post.title}</Link> by{" "}
                    {post.username}
                    <p>
                      created{" "}
                      {formatter.format(
                        new Date(post.createdAt).getTime(),
                        "hours"
                      )}
                    </p>
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
