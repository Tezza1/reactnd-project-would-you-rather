import { combineReducers } from 'redux';

const initialState = {
  greeting: "Hi"
}

const api_call = "The data payload from an api call"

const greeting = (state = initialState, action) => {
  switch(action.type){
    case 'GREET_ME':
      return { ...state, welcome: 'Hello, Terry' }
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World'}
    case 'API_GREET':
      return { ...state, welcome: api_call }
     default:
      return state;
  }
}

const defaultState = {
  loggedIn: false
}

const loggedIn = (state = defaultState, action) => {
  switch(action.type){
    case 'LOGGED_IN':
      return { loggedIn: true}
    case 'LOGGED_OUT':
      return { loggedIn: false}
    default:
      return state
  }
}

export default combineReducers({
  greeting,
  loggedIn
})


// https://redux.js.org/api/combinereducers
// an action is NOT a function, it is an object
// dispatch an action ... we say 'Hey go do tha thing'
