import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';
import SortSelect from '../components/SortSelect';
import Categories from '../components/Categories';
import {connect} from 'react-redux';
import * as PostsActions from '../actions/Posts';
import {Link} from 'react-router-dom';

class Category extends Component {

  componentWillMount() {

    const {getAllForCategory} = this.props;
    const {category} = this.props.match.params;

    if (category) {
      getAllForCategory(category)
    }
  }

  render() {
    const {category} = this.props.match.params;
    return (
      <div className="container-fluid">
        <Navbar/>
        <Categories/>
        <h1>Category : {category}</h1>
        <SortSelect sortTarget="posts"/>
        <Link to="/new" className="btn btn-primary btn-lg btn-new-post">Add Post</Link>
        <Posts category={category}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllForCategory: (category) => dispatch(PostsActions.getAllForCategory(category))

  }
}

export default connect(null, mapDispatchToProps)(Category);
