import {
  SET_BUZZWORDS,
  CHG_CURRENT_BUZZWORD,
  CLEAR_BUZZWORD_FORMDATA
} from '../constants'
import { merge } from 'ramda'

//  {type: SET_BUZZWORDS, payload: [{some array of buzzword objects}]}
export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload

    default:
      return state
  }
}

//  action.payload ==> {value: 'PaaS' }

export const currentBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    case CLEAR_BUZZWORD_FORMDATA:
      return {}
    default:
      return state
  }
}
