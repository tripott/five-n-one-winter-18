import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'ramda'

//const Form = ({id, name, value, onChange, onSubmit, cancelUrl}) => {

const Form = props => {
  console.log('GENERIC FORM props', props)
  return (
    <form
      onSubmit={props.onSubmit({
        id: props.id,
        name: props.name,
        value: props.value
      })}
    >
      <div>
        <label className="dib">id</label>
        <div>{props.id}</div>
      </div>
      <div>
        <label className="dib">name</label>
        <input
          type="text"
          value={props.name}
          onChange={e => props.onChange('name', e.target.value)}
        />
      </div>
      <div>
        <label className="dib">value</label>
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange('value', e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
        <Link to={props.cancelUrl}>Cancel</Link>
      </div>
    </form>
  )
}

export default Form
