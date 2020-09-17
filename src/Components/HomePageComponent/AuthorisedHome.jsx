import React from "react"
import { navigate, Redirect } from "@reach/router"
import UserInfo from "./UserInfo"
import DisplayPosts from "../PostsComponent/DisplayPosts"
import createNewPost from "../../helpers/CreatePosts"
import CreatePostInput from "../PostsComponent/CreatePostInput"
import getAllPosts from "../../helpers/allPosts"

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
    const postsFromDb = await getAllPosts()
    this.setState({ posts_arr: postsFromDb, loading: false })
  }

  createNewPost = async (e) => {
    const newPost = {
      title: this.state.titleValue,
      description: this.state.descValue,
      createdAt: new Date().getTime(),
    }

    const id = await createNewPost(newPost)
    const newPostWithId = { ...newPost, id }

    this.setState({
      posts_arr: [...this.state.posts_arr, newPostWithId],
    })
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
            <UserInfo
              userProfile={this.state.user_arr}
              logOutHandler={this.handleLogOutClick}
            />
            <CreatePostInput createCricPost={this.createNewPost} />
            <DisplayPosts
              posts_arr={this.state.posts_arr}
              loading={this.state.loading}
              sortPosts={this.sortPosts}
            />
          </div>
        )}
      </div>
    )
  }
}

export default AuthorisedHome

/*

/home -> AuthorisedHome
Before
AuthorisedHome:
  State:
    - user_arr
  
  Components:
    DisplayPost:
      State:
      - loading
      - post_arr
      - titleValue
      - descValue
      - sortValue

      Components:
        CreatePost:
          Props:
            - titleValue
            - descValue
            - handlers...


            after

            
AuthorisedHome:
  State:
    - user_arr
    - loading
    - post_arr
  
  Components:
    DisplayPost:
      State:
      - sortValue

      Props:
        - posts_arr
        - loading
        - sortPosts : function

    CreatePost
      State:
      - titleValue
      - descValue
      Props:
      - createNewPost : function
? */
