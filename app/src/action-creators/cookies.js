import fetch from 'isomorphic-fetch'
import { SET_COOKIES, SET_ERROR_MSG, CHG_CURRENT_COOKIE } from '../constants'

const url = 'http://localhost:5000/cookies'

export const setCookies = async (dispatch, getState) => {
  const cookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COOKIES, payload: cookies })
}

export const addCookie = (cookie, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(cookie)

  const result = await fetch('http://localhost:5000/cookies', {
    headers,
    method,
    body
  })
    .then(res => res.json())
    .catch(err =>
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding cookie to the database'
      })
    )

  if (result) {
    if (result.ok) {
      dispatch(setCookies)
      history.push('/cookies')
    }
  }
}

// Handles binding data entered into the form with redux
export const chgCookie = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COOKIE, payload: { [field]: value } })
}
