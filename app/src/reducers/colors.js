import {
  SET_COLORS,
  CHG_CURRENT_COLOR,
  CHG_CURRENT_VIEW_EDIT_COLOR,
  RESET_NEW_COLOR_FORM,
  RESET_VIEW_EDIT_COLOR_FORM,
  TOGGLE_CONFIRM_DELETE_COLOR
} from '../constants'
import { merge } from 'ramda'

export const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}
//add form
export const currentColor = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      return merge(state, action.payload)
    case RESET_NEW_COLOR_FORM:
      return {}
    default:
      return state
  }
}

//view and edit form
export const currentViewEditColor = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_VIEW_EDIT_COLOR:
      return merge(state, action.payload)
    case RESET_VIEW_EDIT_COLOR_FORM:
      return {}
    default:
      return state
  }
}

export const showConfirmDeleteColor = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CONFIRM_DELETE_COLOR:
      return !state
    default:
      return state
  }
}
