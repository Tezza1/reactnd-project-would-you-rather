import * as API from '../utils/_DATA.js'

export const GET_USERS = 'GET_USERS'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function handleGetUsers (users, cb) {
return (dispatch) => {
    return API._getUsers()
      .then( users => {
        dispatch(getUsers(users))
        cb()
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}
