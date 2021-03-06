import React from 'react'
import { map } from 'ramda'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const li = bw => <li key={bw.id}>{bw.name}</li>

const buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/buzzwords/new">Add New Buzzword</Link>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(buzzwords)
