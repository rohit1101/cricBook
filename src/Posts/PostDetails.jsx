import { Link } from "@reach/router"
import React, { Component } from "react"
import getUniquePost from "../helpers/getUniquePost"
import CommentWithInput from "../Comments/CommentWithInput"
import {downVotes, upVotes} from "../helpers/Votes"


class PostDetails extends Component {

  state = {
    uniquePost: {},
    loading: true,
  }
  
  async componentDidMount() {
    const uniquePost = await getUniquePost(this.props.id)
    this.setState({ uniquePost, loading: false })
    
  }
  
  handleVotes= async (e)=> {
    console.log(e.target.value)
    const {id}=JSON.parse(localStorage.getItem('user_arr')) 
    
    if(e.target.value === 'like')
    { 

      const upVote=[]      
      upVote.push({id})
      this.setState({uniquePost:{...this.state.uniquePost,upvotes: upVote}})
      await upVotes(this.state.uniquePost.id,upVote)  
    }

    if(e.target.value === 'dislike')
    { 
      const downVote=[]      
      downVote.push({id})
      this.setState({uniquePost:{...this.state.uniquePost,downvotes: downVote}})
      await downVotes(this.state.uniquePost.id,downVote) 
    }
    
  }

  render() {
    
    const post = this.state.uniquePost
    if (this.state.loading) return "loading..."
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to={`/posts/${post.name}`}>Your Posts</Link>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <cite style={{display:'block'}}>Post by {post.username}</cite>
        <button onClick={this.handleVotes} value='like'>like</button>        
        <button onClick={this.handleVotes} value='dislike'>dislike</button>
        <CommentWithInput postData={post} />
      </div>
    )
  }
}

export default PostDetails
