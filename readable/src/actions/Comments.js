import * as CommentsApi from '../api/Comments';
import {
  GET_ALL_FOR_POST_SUCCESS,
  GET_ALL_FOR_POST_ERR,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERR,
  DELETE_COMMENT,
  VOTE_ON_COMMENT,
  SORT_COMMENTS,
  CLEAR_FORM_COMMENT
} from '../utils/ActionConstants';

// Actions related to getCategories()
export function getAllForPostSuccess(data) {
  return {type: GET_ALL_FOR_POST_SUCCESS, data}
}

export function getAllForPostErr(err) {
  return {type: GET_ALL_FOR_POST_ERR, err}
}

export function getAllForPost(id) {

  const data = CommentsApi.getAllForPost(id)

  return dispatch => {

    data.then((data) => {
      dispatch(getAllForPostSuccess(data))
    }).catch(err => dispatch(getAllForPostErr(err)))
  }
}

// Actions related to get()

export function getCommentSuccess(data) {

  return {type: GET_COMMENT_SUCCESS, data}

}

export function getCommentErr(err) {

  return {type: GET_COMMENT_ERR, err}

}

export function getComment(id) {
  const data = CommentsApi.getDetails(id)
  return dispatch => {
    data.then(data => {
      // console.log(data)
      dispatch(getCommentSuccess(data))
    }).catch(err => dispatch(getCommentErr(err)))
  }
}

export function deleteComment(comment) {
  CommentsApi.del(comment.id)
  return {type: DELETE_COMMENT, comment}
}

export function vote(id, vote) {
  CommentsApi.vote(id, vote)
  return {type: VOTE_ON_COMMENT, id, vote}
}

export function sortBy(prop) {
  return {type: SORT_COMMENTS, prop}
}

export function clearComment() {
  return {type: CLEAR_FORM_COMMENT}
}
