import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function li(cookie) {
  return <li key={cookie.id}>{cookie.name}</li>
}

const Cookies = props => {
  return (
    <div>
      <h1>Cookies</h1>
      <Link to="/cookies/new">Add New Cookie</Link>
      <ul>{map(li, props.cookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { cookies: state.cookies }
}

const connector = connect(mapStateToProps)

export default connector(Cookies)
