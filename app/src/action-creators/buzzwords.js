import fetch from 'isomorphic-fetch'
import { SET_BUZZWORDS } from '../constants'

export default async (dispatch, getState) => {
  const buzzwords = await fetch('http://localhost:5000/buzzwords').then(res =>
    res.json()
  )
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}
