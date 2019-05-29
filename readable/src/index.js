import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import App from './containers/App';
import Category from './containers/Category';
import PostPage from './containers/PostPage';
import NewPost from './containers/NewPost';
import EditPost from './containers/EditPost';
import NotFoundPage from './containers/404';
import NewComment from './containers/NewComment';
import EditComment from './containers/EditComment';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/Main';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as PostsActions from './actions/Posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
store.dispatch(PostsActions.getAll())


const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/new" component={NewPost}/>
        <Route exact path="/:category/posts/:id/new_comment" component={NewComment}/>
        <Route exact path="/" component={App}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Route exact path="/:category/posts" component={Category}/>
        <Route exact path="/:category/posts/:id" component={PostPage}/>
        <Route exact path="/:category/posts/:id/edit" component={EditPost}/>
        <Route exact path="/comments/:comment_id/edit" component={EditComment}/>
      </Switch>
    </Router>
  </Provider>
)

root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(
  <Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
