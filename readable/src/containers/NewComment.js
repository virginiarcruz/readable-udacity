import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';

class NewComment extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <CommentForm post_id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default connect()(NewComment);
