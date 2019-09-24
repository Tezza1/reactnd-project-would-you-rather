export const LOGIN_STATUS = 'LOGIN_STATUS'
export const LOGGED_IN_USER = 'LOGGED_IN_USER'

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

