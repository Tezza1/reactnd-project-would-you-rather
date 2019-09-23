import { LOGIN_STATUS, LOGGED_IN_USER } from './types'

export function loginStatus (status) {
  return {
    type: LOGIN_STATUS,
    status
  }
}

export function loggedInUser (id) {
  return {
    type: LOGGED_IN_USER,
    id
  }
}

