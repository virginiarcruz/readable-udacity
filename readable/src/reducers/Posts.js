import {
  GET_POST_SUCCESS,
  GET_POST_ERR,
  GET_ALL_POSTS_ERR,
  GET_ALL_POSTS_SUCCESS,
  CLEAR_FORM_POST,
  DELETE_POST,
  VOTE_ON_POST,
  VOTE_ON_POST_FROM_DETAIL_PAGE,
  GET_ALL_POSTS_FOR_CATEGORY_ERR,
  GET_ALL_POSTS_FOR_CATEGORY_SUCCESS,
  SORT_POSTS
} from '../utils/ActionConstants';;

function Posts(state = {sortKeyPosts: "voteScore"}, action) {

  switch (action.type) {
    case GET_POST_SUCCESS:
      // console.log(action.data);
      return {
        ...state,
        post: action.data
      }
    case GET_POST_ERR:
      // console.log(action.err);
      return state
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data.sort((a, b) => a[state.sortKeyPosts] < b[state.sortKeyPosts])
      }
    case GET_ALL_POSTS_ERR:
      // console.log(action.err);
      return state
    case GET_ALL_POSTS_FOR_CATEGORY_SUCCESS:
      return {
        ...state,
        posts: action.data
      }
    case GET_ALL_POSTS_FOR_CATEGORY_ERR:
      // console.log(action.err);
      return state
    case CLEAR_FORM_POST:
      return {
        ...state,
        post: {}
      }
    case DELETE_POST:
      return state.posts ? {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.post.id
        }),
        post:{}

      }:
      {
        ...state,
        post:{}
      }
    case VOTE_ON_POST:
      return state.posts ?
      {
        ...state,
        
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            if (action.vote === "upVote") {
              post.voteScore += 1
            } else if (action.vote === "downVote") {
              post.voteScore -= 1
            }
          }
          return post
        })
      }
      :
      state

    case VOTE_ON_POST_FROM_DETAIL_PAGE:
    return {
      ...state,
      post: state.post.id === action.id ?
        {...state.post, voteScore: state.post.voteScore += action.vote === "upVote"? 1 : -1}
        :
        state.post
    }

    case SORT_POSTS:
      // console.log("Sorting by ", action.prop);

        return state.posts ?
          {
            ...state,
            posts: state['posts'].sort((a, b) => a[action.prop] < b[action.prop]),
            sortKeyPosts: action.prop
          }
       :
        state
    default:
      return state
  }
}

export default Posts
