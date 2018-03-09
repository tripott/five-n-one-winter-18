import fetch from 'isomorphic-fetch'
import {
  SET_STARWARS,
  CHG_STARWARS_CHARACTER,
  CLEAR_STARWARS_FORMDATA
} from '../constants'

const url = 'http://localhost:5000/starwars'

export const setStarWarsCharacters = async (dispatch, setState) => {
  const characters = await fetch(url).then(res => res.json())

  dispatch({ type: SET_STARWARS, payload: characters })
}

export const chgStarWarsCharacter = (field, value) => (dispatch, setState) => {
  dispatch({ type: CHG_STARWARS_CHARACTER, payload: { [field]: value } })
}

export const addStarWarsCharacter = (character, history) => async (
  dispatch,
  getState
) => {
  const method = 'POST'
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(character)

  const result = await fetch(url, { method, headers, body })
    .then(res => res.json())
    .catch(err =>
      console.log('Problem with addStarWarsCharacter action creator', err)
    )

  // result => {"ok": true}

  if (result.ok) {
    dispatch({ type: CLEAR_STARWARS_FORMDATA })
    dispatch(setStarWarsCharacters)
    history.push('/starwars')
  } else {
    console.log('Problem with addStarWarsCharacter action creator')
  }
}
