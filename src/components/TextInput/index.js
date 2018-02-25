import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../redux/app/actions'
import styles from './styles.scss'

let inputRef

const TextInput = ({
  fields,
  field,
  name,
  fieldChanged,
  className,
  type = 'text',
  filter,
  stayFocused,
}) =>
  <div className={cx(styles.textInput, className)}>
    <input
      required
      id={field}
      type={type}
      value={fields[field]}
      onBlur={() => stayFocused && inputRef && inputRef.focus()}
      ref={elem => {
        inputRef = elem
        if (stayFocused && inputRef) {
          inputRef.focus()
        }
      }}
      onChange={e =>
        !filter || e.target.value === '' || filter(e.target.value)
          ? fieldChanged({ field, value: e.target.value })
          : e.preventDefault()}
    />
    <label htmlFor={field}>
      {name}
    </label>
  </div>

export default connect(
  state => ({
    fields: state.app.fields,
  }),
  actions
)(TextInput)
