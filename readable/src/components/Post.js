import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default class Post extends Component {

  getDateTimeFromTimestamp = (unixTimeStamp) => {
    var date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  render() {
    const {post} = this.props;
    return (
      <div key={post.id} className="card">
        <h2>{post.title}</h2>
        <p className="lead">{post.body}</p>
        <div className="post-meta1">
          <span>Comments : {post.commentCount} </span>

          <Button onClick={() => this.props.vote(post.id, "upVote")}> Upvote </Button>
          <span> Votes: {post.voteScore} </span>
          <Button onClick={() => this.props.vote(post.id, "downVote")}> Downvote </Button>

        </div>
        <div className="post-meta2">
          <span>By: {post.author} </span>
          <span> on: {this.getDateTimeFromTimestamp(post.timestamp)} in </span>
            <Link to={`/${post.category}/posts`}>{post.category} </Link>
          <Button onClick={() => this.props.deletePost(post)}> delete </Button>
          <Link to={`/${post.category}/posts/${post.id}/edit`}> Edit </Link>
          <Link to={`/${post.category}/posts/${post.id}`}> View </Link>
        </div>
      </div>

    );
  }
}
