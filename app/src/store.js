import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords } from './reducers/buzzwords'
import { appError } from './reducers/errors'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    starWarsCharacters,
    buzzwords,
    appError
  }),
  applyMiddleware(thunk)
)
