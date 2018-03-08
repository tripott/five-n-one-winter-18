import fetch from 'isomorphic-fetch'
import {
  SET_BUZZWORDS,
  SET_ERROR_MSG,
  CHG_CURRENT_BUZZWORD,
  CLEAR_BUZZWORD_FORMDATA
} from '../constants'

export const setBuzzwords = async (dispatch, getState) => {
  const buzzwords = await fetch('http://localhost:5000/buzzwords').then(res =>
    res.json()
  )
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}

export const addBuzzword = (buzzword, history) => async (
  dispatch,
  getState
) => {
  const url = 'http://localhost:5000/buzzwords'
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }

  const body = JSON.stringify(buzzword)

  const result = await fetch(url, { headers, method, body })
    .then(httpResponse => {
      //console.log('fetch httpResponse', httpResponse)
      return httpResponse.json()
    })
    .catch(err => {
      console.log('fetch err', err)
      dispatch({
        type: SET_ERROR_MSG,
        payload: 'Error adding buzzword to the database'
      })
    })

  // result {ok:true
  if (result.ok) {
    dispatch(setBuzzwords)
    dispatch({ type: CLEAR_BUZZWORD_FORMDATA })
    history.push('/buzzwords')
  } else {
    console.log('Error adding buzzword')
  }
}

export const chgBuzzword = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_BUZZWORD, payload: { [field]: value } })
}
