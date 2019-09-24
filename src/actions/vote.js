export const ADD_VOTE= 'ADD_VOTE'

export function addVote (question) {
  return {
    type: ADD_VOTE,
    question
  }
}
