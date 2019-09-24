import * as API from '../utils/_DATA.js'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleGetQuestions (users, cb) {
return (dispatch) => {
    return API._getQuestions()
    .then( questions => {
        dispatch(getQuestions(questions))
        cb()
      })
      .catch(() => {
        console.log('There was an error. Try again.')
      })
  }
}
