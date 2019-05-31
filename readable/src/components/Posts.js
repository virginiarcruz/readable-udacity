import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import * as PostActions from '../actions/Posts';

class Posts extends Component {

  state = {
    posts : this.props.posts
  }

    componentWillReceiveProps(newProps) {
      this.setState({
        posts: newProps.posts
      });
    }


  genPostList = (posts) => {
    if (posts !== undefined && posts.length > 0) {
      return posts.map((post) => (<Post post={post} key={post.id} vote={this.props.vote} deletePost={this.props.deletePost}/>))
    } else {
      return (
        <h3>No Posts found! :( </h3>
      )
    }
  }

  render() {

    const  {posts} = this.state;
    return (
      <div className="Posts">
        <h2>
          Posts
        </h2>
        {this.genPostList(posts)}
      </div>
    );
  }}

function mapStateToProps(state) {

  return {posts: state.Posts.posts, sortKeyPosts: state.Posts.sortKeyPosts}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (post) => dispatch(PostActions.deletePost(post)),
    vote: (id, vote) => dispatch(PostActions.vote(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
