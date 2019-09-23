import { ADD_VOTE } from './types'

export function addVote (question) {
  return {
    type: ADD_VOTE,
    question
  }
}
