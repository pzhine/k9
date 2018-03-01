import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'

const Message = ({ message, word, className }) => {
  const style = {
    fontSize: `${Math.min(
      Math.max(2, 25 / message.concat(word).join('').length),
      14
    )}em`,
  }
  return (
    <div className={cx(styles.message, className)} style={style}>
      {message.map((w, idx) =>
        <span key={idx}>
          {w}
        </span>
      )}
      <span>
        {word}
      </span>
    </div>
  )
}

export default connect(state => ({
  message: state.app.message,
  word: state.app.word,
}))(Message)
