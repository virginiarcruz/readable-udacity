import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PostActions from '../actions/Posts';
import * as CommentActions from '../actions/Comments';

class SortSelect extends Component {

  handleChange = (e) => {
    const {sortPostsBy, sortCommentsBy, sortTarget} = this.props;

    if (sortTarget === 'posts') {
      sortPostsBy(e.target.value)
    } else if (sortTarget === 'comments') {
      sortCommentsBy(e.target.value)
    }
  }

  render() {

    const {sortKeyPosts, sortKeyComments, sortTarget} = this.props;
    console.log(sortKeyPosts, sortKeyComments, sortTarget);
    return (
      <div className="sort-select-container">
        <span className="header">Sort By:</span>
        <select className="sort-select form-control" id="sort-by" value={sortTarget === "posts" ? sortKeyPosts : sortKeyComments} name="sort-by" onChange={this.handleChange}>
          <option value="voteScore">Vote Score</option>
          <option value="timestamp">Timestamp</option>
        </select>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    sortKeyComments : state.Comments.sortKeyComments,
    sortKeyPosts: state.Posts.sortKeyPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortPostsBy: (prop) => dispatch(PostActions.sortBy(prop)),
    sortCommentsBy: (prop) => dispatch(CommentActions.sortBy(prop))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect)
