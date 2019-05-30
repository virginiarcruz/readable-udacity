import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import * as PostActions from '../actions/Posts';
import {Link} from 'react-router-dom';
import {ButtonGroup} from 'react-bootstrap';

class Categories extends Component {

  componentWillMount() {
    const {getCategories} = this.props;
    getCategories()
  }

  genCategoryList = (categories) => {
    if (categories !== undefined) {
      return (
        <div className="content-categories">
          <span className="title-categories">
            Filter Categories:
          </span>
          
          <ButtonGroup>
            {categories.map((category) => {

              return (
                <Link 
                  variant="light"
                  key={category.path}
                  to={`/${category.path}`}
                  onClick={() => this.props.getAllForCategory(category.path)}
                  className="btn btn-light btn-lg cat-link">{category.name}
                </Link>
              )
            })
}
          </ButtonGroup>
        </div>
      )
    } else {
      return (
        <h3>No Category found!</h3>
      )
    }
  }
  render() {
    const {categories} = this.props;
    return (
      <div className="categories">
        {this.genCategoryList(categories)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {categories: state.Categories.categories,
  selected_category: state.Categories.selected_category}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(CategoryActions.getCategories()),
    getAllForCategory: (category) => dispatch(PostActions.getAllForCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
