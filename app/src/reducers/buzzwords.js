import { SET_BUZZWORDS, ADD_BUZZWORD } from '../constants'
import { append } from 'ramda'
//  {type: SET_BUZZWORDS, payload: [{some array of buzzword objects}]}
export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    case ADD_BUZZWORD:
      return append(action.payload, state)
    default:
      return state
  }
}
