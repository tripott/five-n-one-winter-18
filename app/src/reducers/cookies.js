import { SET_COOKIES, CHG_CURRENT_COOKIE } from '../constants'
import { merge } from 'ramda'

export const cookies = (state = [], action) => {
  switch (action.type) {
    case SET_COOKIES:
      return action.payload
    default:
      return state
  }
}

/*
{
"name": "With integrity and consiste",
"value": null
}
*/

export const currentCookie = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COOKIE:
      return merge(state, action.payload)
    default:
      return state
  }
}
