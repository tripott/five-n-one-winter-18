import fetch from 'isomorphic-fetch'
import { SET_STARWARS } from '../constants'

export default async (dispatch, setState) => {
  const characters = await fetch('http://localhost:5000/starwars').then(res =>
    res.json()
  )

  dispatch({ type: SET_STARWARS, payload: characters })
}
