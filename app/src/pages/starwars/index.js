import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Link } from 'react-router-dom'

function li(c) {
  return (
    <li className="pa1 blue grow" key={c.id}>
      {c.name}
    </li>
  )
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars Character Names</h1>
      <Link to="/starwars/new">Add Character</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

function mapStateToProps(state) {
  return { starwars: state.starWarsCharacters }
}

const connector = connect(mapStateToProps)

export default connector(StarWars)
