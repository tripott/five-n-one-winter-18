import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords } from './reducers/buzzwords'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    starWarsCharacters,
    buzzwords
  }),
  applyMiddleware(thunk)
)
