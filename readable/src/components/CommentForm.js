import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CommentActions from '../actions/Comments';
import * as CommentsApi from '../api/Comments';
import serializeForm from 'form-serialize';
import uuid from 'uuid';
import {withRouter} from 'react-router-dom';

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
    // console.log(this.state)
  };

  componentWillMount() {
    const {getComment, comment_id} = this.props;

    if (comment_id !== undefined) {
      getComment(comment_id)
    }
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      ...newProps.comment
    });
  }

  componentWillUnmount() {
    const {clearComment} = this.props;

    clearComment()
  }

  handleSubmit = (event) => {
    const {comment_id, post_id} = this.props;
    event.preventDefault();
    // console.log(formData)
    if (comment_id !== undefined) {
      let formData = {
        ...this.state
      }
      formData.timestamp = Date.now()
      CommentsApi.edit(comment_id, formData)
    } else if (post_id !== undefined) {
      let formData = serializeForm(event.target, {hash: true});
      formData.id = uuid.v4()
      formData.parentId = post_id
      formData.timestamp = Date.now()
      CommentsApi.addToPost(formData);
    }
    this.props.history.goBack()
  }

  render() {

    return (
      <div className="new-comment-form">
        <h3>
          Create New Comment
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="author">Author :</label>
            <input type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="body">Body :</label>
            <textarea name="body" rows="5" className="form-control" id="body" value={this.state.body} onChange={this.handleChange}/>
          </div>

          <input className="btn btn-default" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {comment: state.Comments.comment}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComment: (id) => dispatch(CommentActions.getComment(id)),
    clearComment: () => dispatch(CommentActions.clearComment())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
