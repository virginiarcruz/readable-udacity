import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default class Comment extends Component {

  getDateTimeFromTimestamp = (unixTimeStamp) => {
    var date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  render() {
    const {comment} = this.props;
    return (
      <div key={comment.id} className="card">
        <p className="lead">{comment.body}</p>
        <div className="post-comments">
          <span>Votes: {comment.voteScore}
          </span>
          <Button onClick={() => this.props.vote(comment.id, "upVote")}>
            Upvote
          </Button>
          <Button onClick={() => this.props.vote(comment.id, "downVote")}>
            Downvote
          </Button>

        </div>
        <div className="post-data">
          <span>By: {comment.author}</span>
          <span>
            on: {this.getDateTimeFromTimestamp(comment.timestamp)}
            in </span>
          <Button className="btn btn-danger" onClick={() => this.props.deleteComment(comment)}>
            Delete
          </Button>
          <Link className="btn btn-success" to={`/comments/${comment.id}/edit`}>
            Edit
          </Link>
        </div>
      </div>
    );
  }
}
