import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.scss'

const Words = ({ words }) =>
  <div className={styles.words}>
    {words.map(word =>
      <div key={word} className={styles.word}>
        {word}
      </div>
    )}
  </div>

export default connect(state => ({ words: state.app.words }))(Words)
