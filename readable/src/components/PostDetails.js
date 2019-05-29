import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import * as PostActions from '../actions/Posts';
import SortSelect from '../components/SortSelect'
import {withRouter} from 'react-router-dom';

class PostDetails extends Component {

  componentWillMount() {
    // Manage direct url loading
    const {get} = this.props;
    const post_id = this.props.post_id;
    if (post_id) {
      get(post_id)
    }
  }

  componentWillReceiveProps(props){
    if (! props.post.id){
      this.props.history.push("/404")
    }
  }

  render() {

    let post = this.props.post

    if(post === undefined){
      post = {}
    }
    return (
      <div>
        <Post post={post} key={post.id} vote={this.props.voteFromDetailPage} deletePost={this.props.deletePost}/>
        <Link to={`/${post.category}/posts/${post.id}/new_comment`} className="btn btn-primary btn-new-comment">Add Comment</Link>
        <SortSelect sortTarget="comments"/>
        <Comments post_id={this.props.post_id}/>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {post: state.Posts.post}
}

const mapDispatchToProps = (dispatch) => {
  return {
    get: (id) => dispatch(PostActions.get(id)),
    deletePost: (post) => dispatch(PostActions.deletePost(post)),
    voteFromDetailPage: (id, vote) => dispatch(PostActions.voteFromDetailPage(id, vote))

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
