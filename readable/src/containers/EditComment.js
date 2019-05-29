import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';

class EditComment extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <CommentForm comment_id={this.props.match.params.comment_id}/>
      </div>
    );
  }
}

export default connect()(EditComment);
