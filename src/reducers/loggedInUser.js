 import { LOGGED_IN_USER } from '../actions/auth'

const initialState = {
  user: {}
}

function loggedInUser (state = initialState, action) {
  switch(action.type){
    default:
      return state
  }
}

export default loggedInUser;
