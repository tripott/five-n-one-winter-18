import fetch from 'isomorphic-fetch'
import {
  SET_COLORS,
  CHG_CURRENT_COLOR,
  SET_ERROR_MSG,
  CHG_CURRENT_VIEW_EDIT_COLOR,
  RESET_NEW_COLOR_FORM
} from '../constants'

const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export const getColor = id => async (dispatch, getState) => {
  const color = await fetch(`${url}/${id}`).then(res => res.json())
  dispatch({ type: CHG_CURRENT_VIEW_EDIT_COLOR, payload: color })
}

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(color)

  const result = await fetch('http://localhost:5000/colors', {
    headers,
    method,
    body
  })
    .then(res => {
      console.log('res', res)
      return res.json()
    })
    .catch(err =>
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding color to the database'
      })
    )

  if (result) {
    if (result.ok) {
      dispatch({ type: RESET_NEW_COLOR_FORM })
      dispatch(setColors)
      history.push('/colors')
    }
  }
}

// Handles binding data entered into the form with redux
export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } })
}
