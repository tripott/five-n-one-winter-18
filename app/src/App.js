import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import StarWars from './pages/starwars'
import StarWarsForm from './pages/starwars/form'
import BuzzWords from './pages/buzzwords'
import ColorForm from './pages/colors/form'
import BuzzWordForm from './pages/buzzwords/form'
import Cookies from './pages/cookies'
import CookiesForm from './pages/cookies/form'
import ShowColor from './pages/colors/show'

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
          <Link to="/cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

/*
<Route
  path="/cookies/new"
  render={props => <CookiesForm {...props} formTitle="Add Cookie" />}
/>
*/

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route path="/colors/new" component={ColorForm} />
          <Route exact path="/starwars" component={StarWars} />
          <Route
            path="/starwars/new"
            render={props => (
              <StarWarsForm {...props} formTitle="Add Character, You Will" />
            )}
          />

          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route
            path="/buzzwords/new"
            render={props => (
              <BuzzWordForm {...props} formTitle="Add Buzzword" />
            )}
          />
          <Route exact path="/cookies" component={Cookies} />
          <Route
            path="/cookies/new"
            render={props => <CookiesForm {...props} formTitle="Add Cookie" />}
          />
          <Route path="/colors/:id" component={ShowColor} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
