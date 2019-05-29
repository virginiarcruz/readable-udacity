import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';
import * as CommentActions from '../actions/Comments';

class Comments extends Component {

  componentWillMount() {
    // Manage direct url loading
    const {getAllForPost, post_id} = this.props;

    if (post_id) {
      getAllForPost(post_id)
    }
  }

  genCommentList = (comments) => {
    // console.log(comments)
    if (comments !== undefined && comments.length > 0) {
      return comments.map((comment) => ((!comment.deleted) && (<Comment key={comment.id} comment={comment} vote={this.props.vote} deleteComment={this.props.deleteComment}/>)))
    } else {
      return (
        <h3>No Comments found!</h3>
      )
    }
  }

  render() {

    let comments = this.props.comments;
    return (
      <div className="Comments">
        <h2>
          Comments</h2>
        {this.genCommentList(comments)}
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {comments: state.Comments.comments, sortKeyComments: state.Comments.sortKeyComments}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllForPost: (id) => dispatch(CommentActions.getAllForPost(id)),
    deleteComment: (comment) => dispatch(CommentActions.deleteComment(comment)),
    vote: (id, vote) => dispatch(CommentActions.vote(id, vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
