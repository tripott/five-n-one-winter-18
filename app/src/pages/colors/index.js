import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

function li(color) {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

class Colors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [],
      fetchErrorMsg: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/colors')
      .then(res => res.json())
      .then(apiColors => this.setState({ colors: apiColors }))
      .catch(err => {
        console.log('COLORS FETCH ERROR', err)
        this.setState({ fetchErrorMsg: 'Error fetching colors' })
      })
  }

  render(props) {
    const display = this.state.fetchErrorMsg ? (
      <h2>{this.state.fetchErrorMsg}</h2>
    ) : (
      <ul>{map(li, this.state.colors)}</ul>
    )

    return (
      <div>
        <h1>Colors</h1>
        {display}
      </div>
    )
  }
}

export default Colors
