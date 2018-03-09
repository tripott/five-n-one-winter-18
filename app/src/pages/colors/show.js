import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getColor, removeColor } from '../../action-creators/colors'
import { TOGGLE_CONFIRM_DELETE_COLOR } from '../../constants.js'

class ShowColor extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }

  render() {
    const props = this.props

    if (props.id !== this.props.match.params.id) {
      return <h1>Loading Color...</h1>
    }

    if (props.confirmDelete) {
      return (
        <section className="ph3 ph5-ns pv5">
          <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <div>
                  <h2 className="fw4 blue mt0 mb3">
                    Are you sure you want to delete this color?
                  </h2>
                </div>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <button
                  onClick={e => props.removeColor(props.id, props.history)}
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2"
                >
                  Delete
                </button>
                <button
                  onClick={e => props.toggleConfirm()}
                  className="no-underline f6 tc db w-100 pv3 bg-animate bg-white hover-bg-dark-blue black br2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </article>
        </section>
      )
    }

    return (
      <div className="vh-100" style={{ backgroundColor: props.value }}>
        <h1>{props.name}</h1>
        <Link to={`/colors/${props.id}/edit`}>Edit</Link>
        <button onClick={e => props.toggleConfirm()}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    id: state.currentViewEditColor.id,
    name: state.currentViewEditColor.name,
    value: state.currentViewEditColor.value,
    confirmDelete: state.showConfirmDeleteColor
  }
}

const mapActionToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    toggleConfirm: () => dispatch({ type: TOGGLE_CONFIRM_DELETE_COLOR }),
    removeColor: (id, history) => {
      dispatch({ type: TOGGLE_CONFIRM_DELETE_COLOR })
      dispatch(removeColor(id, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(ShowColor)
