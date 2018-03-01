/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'
import syncHistory from '../../hoc/syncHistory'
import actions from '../../redux/app/actions'

import Nav from '../Nav'
import Keypad from '../Keypad'
import Message from '../Message'

const App = () =>
  <Provider store={store}>
    <main className={styles.app}>
      <Nav />
      <div className={styles.content}>
        <Message className={styles.message} />
        <Keypad className={styles.keypad} />
      </div>
    </main>
  </Provider>

export default syncHistory({
  store,
  locationChangedAction: actions.locationChanged,
})(App)
