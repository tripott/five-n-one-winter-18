import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { appError } from './reducers/errors'
import { cookies, currentCookie } from './reducers/cookies'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    starWarsCharacters,
    buzzwords,
    appError,
    currentBuzzword,
    cookies,
    currentCookie
  }),
  applyMiddleware(thunk)
)
