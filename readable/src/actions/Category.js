import * as CategoryApi from '../api/Category';
import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR} from '../utils/ActionConstants';

// Actions related to getCategories()
export function getCategoriesSuccess(data) {
  return {type: GET_CATEGORIES_SUCCESS, data}
}

export function getCategoriesErr(err) {
  return {type: GET_CATEGORIES_ERR, err}
}

export function getCategories() {

  const data = CategoryApi.getAll()

  return dispatch => {

    data.then((data) => {
      dispatch(getCategoriesSuccess(data.categories))
    }).catch(err => dispatch(getCategoriesErr(err)))
  }
}
