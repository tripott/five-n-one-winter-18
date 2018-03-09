import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function li(color) {
  return (
    <li key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>{color.name}</Link>
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/colors/new">Add New Color</Link>
      <ul>{map(li, props.colors)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)

// class Colors extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       colors: [],
//       fetchErrorMsg: null
//     }
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:5000/colors')
//       .then(res => res.json())
//       .then(apiColors => this.setState({ colors: apiColors }))
//       .catch(err => {
//         console.log('COLORS FETCH ERROR', err)
//         this.setState({ fetchErrorMsg: 'Error fetching colors' })
//       })
//   }
//
//   render(props) {
//     const display = this.state.fetchErrorMsg ? (
//       <h2>{this.state.fetchErrorMsg}</h2>
//     ) : (
//       <ul>{map(li, this.state.colors)}</ul>
//     )
//
//     return (
//       <div>
//         <h1>Colors</h1>
//         {display}
//       </div>
//     )
//   }
// }
