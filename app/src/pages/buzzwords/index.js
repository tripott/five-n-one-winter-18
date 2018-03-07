import React from 'react'
import { map } from 'ramda'

import { connect } from 'react-redux'

const li = bw => <li key={bw.id}>{bw.name}</li>

const buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('state', state)
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(buzzwords)
