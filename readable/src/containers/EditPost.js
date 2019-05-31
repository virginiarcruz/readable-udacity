import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import {connect} from 'react-redux';


class EditPost extends Component {

  render() {
    console.log("id edit", this.props)
    return (
      <div className="container-fluid">
        <Navbar/>
        <PostForm post_id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default connect()(EditPost);
