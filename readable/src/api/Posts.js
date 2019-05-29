import * as AuthToken from '../utils/AuthToken';

const API_URL = "http://localhost:3001"

const headers = {
  'Authorization': AuthToken.initOrGetToken(),
  'Content-type': 'application/json'
}

// Get all of the posts. Useful for the main page when no category is selected.
export function getAll() {

  return fetch(`${API_URL}/posts`, {headers}).then((resp) => resp.json())

}

// Get the details of a single post.
export function get(id) {

  return fetch(`${API_URL}/posts/${id}`, {headers}).then((resp) => resp.json())

}

// Add a new post.
export function add(post) {

  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post)
  }).then((resp) => resp.json())
}

// Voting on a post.
export function vote(id, vote = 'upVote') {

  if (vote === 'upVote' || vote === 'downVote') {
    return fetch(`${API_URL}/posts/${id}`, {
      headers: headers,
      'method': 'POST',
      body: JSON.stringify({option: vote})
    }).then((resp) => resp.json())
  }

}

export function del(id) {

  return fetch(`${API_URL}/posts/${id}`, {
    headers: headers,
    'method': 'DELETE'
  }).then((resp) => resp.json())

}

// Edit the details of an existing post.
export function edit(id, post) {

  return fetch(`${API_URL}/posts/${id}`, {
    headers: headers,
    'method': 'PUT',
    body: JSON.stringify(post)
  }).then((resp) => resp.json())
}

// Get all of the posts for a particular category.
export function getAllForCategory(category) {

  return fetch(`${API_URL}/${category}/posts`, {headers}).then((resp) => resp.json())

}
