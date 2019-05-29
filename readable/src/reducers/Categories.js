import {GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR} from '../utils/ActionConstants';;

function Categories(state = {}, action) {

  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.data
      }
    case GET_CATEGORIES_ERR:
      // console.log(action.err);
      return state
    default:
      return state

  }
}

export default Categories
