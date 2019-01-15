import {combineReducers} from 'redux'

const initialState = {
  cover: '',
  duration: 0,
  title: 'default',
  artist: '',
  like: 0,
  is_liked: false
}

function data(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_FULFILLED':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  data
})