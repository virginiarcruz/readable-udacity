import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import {connect} from 'react-redux';


class EditPost extends Component {

  componentWillMount() {}

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <PostForm post_id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default connect()(EditPost);
