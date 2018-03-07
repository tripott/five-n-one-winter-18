import { SET_ERROR_MSG } from '../constants'

export const appError = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR_MSG:
      return action.payload
    default:
      return state
  }
}
