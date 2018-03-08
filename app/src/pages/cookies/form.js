import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addCookie, chgCookie } from '../../action-creators/cookies'

const CookieForm = props => {
  return (
    <div>
      <h1>{props.formTitle}</h1>
      <Form
        cancelUrl="/cookies"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.currentCookie, props.history)}
        {...props.currentCookie}
        showValueInput={false}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentCookie: state.currentCookie
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => {
      dispatch(chgCookie(field, value))
    },
    onSubmit: (currentCookie, history) => e => {
      e.preventDefault()
      dispatch(addCookie(currentCookie, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(CookieForm)
