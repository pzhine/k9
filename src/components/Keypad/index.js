import React from 'react'
import cx from 'classnames'
import { chunk } from 'lodash'
import { connect } from 'react-redux'
import Block from '../Raw/Block'
import styles from './styles.scss'
import actions from '../../redux/app/actions'
import keys from '../../content/keypad.json'

const onKeyDown = ({ e, pressKey }) => {
  if (!e.key.match(/[^0-9*#]/)) {
    pressKey(e.key)
  }
}

const Keypad = ({ pressKey, className }) => {
  const rows = chunk(keys, 3)
  return (
    <div
      className={cx(styles.keypad, className)}
      onKeyDown={e => onKeyDown({ e, pressKey })}
    >
      {rows.map(row =>
        <div className={styles.row} key={row[0].number}>
          {row.map(key =>
            <button
              className={styles.key}
              key={key.number}
              onClick={() => pressKey(key.number)}
            >
              <span className={styles.number}>
                {key.number}
              </span>
              <span className={styles.letters}>
                {key.letters || <Block html="&nbsp;" />}
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default connect(null, actions)(Keypad)
