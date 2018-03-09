import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getColor,
  chgEditColor,
  updateColor
} from '../../action-creators/colors'

class EditColorForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Color</h1>
        <Form
          id={props.id}
          name={props.currentColor.name}
          value={props.currentColor.value}
          cancelUrl={`/colors/${props.currentColor.id}`}
          onSubmit={e => props.onSubmit(props.currentColor, props.history)}
          onChange={props.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentColor: state.currentViewEditColor
})

const mapActionsToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    onChange: (field, value) => dispatch(chgEditColor(field, value)),
    onSubmit: (color, history) => e => {
      e.preventDefault()
      dispatch(updateColor(color, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditColorForm)
