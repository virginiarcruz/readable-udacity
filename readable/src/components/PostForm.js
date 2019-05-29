import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import {connect} from 'react-redux';
import * as CategoryActions from '../actions/Category';
import * as PostActions from '../actions/Posts';
import uuid from 'uuid';
import * as PostsApi from '../api/Posts';
import {withRouter} from 'react-router-dom';

class PostForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      body: "",
      category: ""
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
    const {getCategories, getPost, post_id} = this.props;
    if (post_id !== undefined) {
      getPost(post_id)
    }

    getCategories()
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ...newProps.post
    });
  }

  componentWillUnmount() {
    const {clearPost} = this.props;

    clearPost()
  }

  handleSubmit = (event) => {
    const {post_id} = this.props;
    event.preventDefault();
    let formData = serializeForm(event.target, {hash: true});
    formData.id = uuid.v4()
    formData.timestamp = Date.now()
    if (post_id !== undefined) {
      PostsApi.edit(post_id, formData)
    } else {
      PostsApi.add(formData);
    }

    //Go back
    this.props.history.goBack()
  }

  render() {
    let {categories} = this.props;
    if (!categories) {
      categories = []
    }

    return (
      <div className="new-post-form">
        <h3>
          Create New Post
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title :</label>
            <input type="text" id="title" className="form-control" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author :</label>
            <input type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="body">Body :</label>
            <textarea name="body" rows="5" className="form-control" id="body" value={this.state.body} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category :</label>

            <select className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleChange}>
              {categories.map(c => (
                <option key={c.name} value={c.path}>
                  {c.name}
                </option>
              ))}

            </select>
          </div>

          <input className="btn btn-default" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {categories: state.Categories.categories, post: state.Posts.post}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(CategoryActions.getCategories()),
    getPost: (id) => dispatch(PostActions.get(id)),
    clearPost: () => dispatch(PostActions.clearPost())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
