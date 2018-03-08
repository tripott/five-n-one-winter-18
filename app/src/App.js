import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import StarWars from './pages/starwars'
import BuzzWords from './pages/buzzwords'
import ColorForm from './pages/colors/form'
import BuzzWordForm from './pages/buzzwords/form'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route path="/colors/new" component={ColorForm} />
          <Route path="/starwars" component={StarWars} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route
            path="/buzzwords/new"
            render={props => (
              <BuzzWordForm {...props} formTitle="Add Buzzword" />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
