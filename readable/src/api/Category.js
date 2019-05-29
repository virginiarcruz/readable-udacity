import * as AuthToken from '../utils/AuthToken';

const API_URL = "http://localhost:3001"

const headers = {
  'method': 'GET',
  'Authorization': AuthToken.initOrGetToken(),
  'Content-type': 'application/json'
}

// Get all of the categories available for the app
export function getAll() {

  return fetch(`${API_URL}/categories`, {headers}).then((resp) => resp.json())

}
