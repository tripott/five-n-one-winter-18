import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor, currentViewEditColor } from './reducers/colors'
import {
  starWarsCharacters,
  currentStarWarsCharacter
} from './reducers/starwars'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { appError } from './reducers/errors'
import { cookies, currentCookie } from './reducers/cookies'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    currentViewEditColor,
    cookies,
    currentCookie,
    starWarsCharacters,
    currentStarWarsCharacter,
    buzzwords,
    currentBuzzword,
    appError
  }),
  applyMiddleware(thunk)
)
