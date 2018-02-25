import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import styles from './styles.scss'

const Words = ({ words, className }) =>
  <div className={cx(styles.words, className)}>
    {words.map(word =>
      <div key={word} className={styles.word}>
        {word}
      </div>
    )}
  </div>

export default connect(state => ({ words: state.app.words }))(Words)
