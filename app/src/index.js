import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import setStarWarsCharacters from './action-creators/starwars'
import setBuzzwords from './action-creators/buzzwords'
import App from './App'
import 'tachyons'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setStarWarsCharacters)
store.dispatch(setBuzzwords)
