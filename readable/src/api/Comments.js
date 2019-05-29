import * as AuthToken from '../utils/AuthToken';

const API_URL = "http://localhost:3001"

const headers = {
  'Authorization': AuthToken.initOrGetToken(),
  'Content-type': 'application/json'
}

// Get all the comments for a single post.
export function getAllForPost(id) {

  return fetch(`${API_URL}/posts/${id}/comments`, {headers}).then((resp) => resp.json())

}

// Add a comment to a post.
export function addToPost(comment) {

  return fetch(`${API_URL}/comments`, {
    headers: headers,
    'method': 'POST',
    body: JSON.stringify(comment)
  }).then((resp) => resp.json())
}

// Get the details for a single comment.
export function getDetails(id) {

  return fetch(`${API_URL}/comments/${id}`, {headers}).then((resp) => resp.json())

}

// Used for voting on a comment.
export function vote(id, vote = 'upVote') {

  if (vote === 'upVote' || vote === 'downVote') {
    return fetch(`${API_URL}/comments/${id}`, {
      headers: headers,
      'method': 'POST',
      body: JSON.stringify({option: vote})
    }).then((resp) => resp.json())
  }
}

// Edit the details of an existing comment.
export function edit(id, comment) {

  return fetch(`${API_URL}/comments/${id}`, {
    headers: headers,
    'method': 'PUT',
    body: JSON.stringify(comment)
  }).then((resp) => resp.json())
}

// Sets a comment's deleted flag to `true`.
export function del(id) {

  return fetch(`${API_URL}/comments/${id}`, {
    headers: headers,
    'method': 'DELETE'
  }).then((resp) => resp.json())
}
