/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import Nav from '../Nav'
import Keypad from '../Keypad'
import Words from '../Words'

const App = () =>
  <Provider store={store}>
    <main className={styles.app}>
      <Nav />
      <div className={styles.content}>
        <Words className={styles.words} />
        <Keypad className={styles.keypad} />
      </div>
    </main>
  </Provider>

export default App
