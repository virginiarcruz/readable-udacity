import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import {connect} from 'react-redux';


class NewPost extends Component {

  componentWillMount() {}

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <PostForm/>
      </div>
    );
  }
}

export default connect()(NewPost);
