import React, { Component } from 'react'
import cx from 'classnames'
import { chunk } from 'lodash'
import { connect } from 'react-redux'
import Block from '../Raw/Block'
import styles from './styles.scss'
import actions from '../../redux/app/actions'
import keys from '../../content/keypad.json'

const buttons = {}

class Keypad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keysDown: {},
    }
  }
  onKeyDown(e) {
    if (!e.key.match(/[^0-9*#]/)) {
      this.setState({ keysDown: { ...this.state.keysDown, [e.key]: true } })
    }
  }
  onKeyUp(e) {
    if (this.state.keysDown[e.key]) {
      this.props.pressKey(e.key)
      this.setState({ keysDown: { ...this.state.keysDown, [e.key]: false } })
    }
  }
  render() {
    const { pressKey, className } = this.props
    const rows = chunk(keys, 3)
    return (
      <div
        className={cx(styles.keypad, className)}
        onKeyDown={e => this.onKeyDown(e)}
        onKeyUp={e => this.onKeyUp(e)}
      >
        {rows.map(row =>
          <div className={styles.row} key={row[0].number}>
            {row.map(key =>
              <button
                className={cx(styles.key, {
                  [styles.isActive]: this.state.keysDown[key.number],
                })}
                key={key.number}
                ref={elem => {
                  buttons[key.number] = elem
                }}
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
        <input type="text" ref={elem => elem && elem.focus()} />
      </div>
    )
  }
}

export default connect(null, actions)(Keypad)
