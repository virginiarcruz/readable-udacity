import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import SortSelect from '../components/SortSelect'
import {connect} from 'react-redux';
import * as PostsActions from '../actions/Posts';
import {Link} from 'react-router-dom';

class App extends Component {

  componentWillMount() {

    const {getAll} = this.props;

      getAll()
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <Categories/>
        <SortSelect sortTarget="posts"/>
        <Link to="/new" className="btn btn-primary btn-lg btn-new-post">Add Post</Link>
        <Posts/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(PostsActions.getAll())
  }
}

export default connect(null, mapDispatchToProps)(App);
