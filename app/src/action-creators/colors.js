import fetch from 'isomorphic-fetch'
import {
  SET_COLORS,
  CHG_CURRENT_COLOR,
  SET_ERROR_MSG,
  CHG_CURRENT_VIEW_EDIT_COLOR,
  RESET_NEW_COLOR_FORM,
  RESET_VIEW_EDIT_COLOR_FORM
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

  const result = await fetch(url, {
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

export const chgEditColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_VIEW_EDIT_COLOR, payload: { [field]: value } })
}

export const updateColor = (color, history) => async (dispatch, getState) => {
  const result = await fetch(`${url}/${color.id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(color)
  }).then(res => {
    console.log('updateColor action creator', res)
    return res.json()
  })

  if (result.ok) {
    dispatch(setColors)
    history.push('/colors/' + color.id)
  }
}

export const removeColor = (id, history) => async (dispatch, getState) => {
  const method = 'DELETE'
  const response = await fetch(`${url}/${id}`, { method })
    .then(res => res.json())
    .catch(err => console.log('DELETE color ERROR in reducer', err))

  if (response.ok) {
    dispatch({ type: RESET_VIEW_EDIT_COLOR_FORM })
    dispatch(setColors)
    history.push('/colors')
  }
}
