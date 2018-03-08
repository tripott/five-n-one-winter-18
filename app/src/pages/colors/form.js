import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addColor, chgColor } from '../../action-creators/colors'

const ColorForm = props => {
  const errorBanner = props.errorMsg === '' ? null : <h2>{props.errorMsg}</h2>

  return (
    <div>
      {errorBanner}
      <h1>Add New Color</h1>
      <Form
        cancelUrl="/colors"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentColor)}
        {...props.currentColor}
        showValueInput={true}
      />
    </div>
  )
}

const mapStateToProps = state => {
  console.log('ColorForm state', state)
  return {
    currentColor: state.currentColor,
    errorMsg: state.appError
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(field, value))
    },
    onSubmit: (history, color) => e => {
      console.log('onSubmit was called!  Oh no!')
      e.preventDefault()
      dispatch(addColor(color, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(ColorForm)
