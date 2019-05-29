import {combineReducers} from 'redux';
import Categories from './Categories';
import Posts from './Posts';
import Comments from './Comments';

export default combineReducers({Categories, Posts, Comments})
