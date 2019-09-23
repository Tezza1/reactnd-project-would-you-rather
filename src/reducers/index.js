import { combineReducers } from 'redux'
import login from './login'
import loggedInUser from './loggedInUser'
import getUsers from './users'
import questions from './questions'

export default combineReducers({
  login,
  loggedInUser,
  getUsers,
  questions
})


// https://redux.js.org/api/combinereducers
// an action is NOT a function, it is an object
// dispatch an action ... we say 'Hey go do tha thing'
