import { SET_STARWARS } from '../constants'

export const starWarsCharacters = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}
