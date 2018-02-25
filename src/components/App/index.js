/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import Nav from '../Nav'
import TextInput from '../TextInput'

const App = () =>
  <Provider store={store}>
    <main className={styles.app}>
      <Nav />
      <div className={styles.content}>
        <TextInput
          type={'numeric'}
          name={'type some numbers'}
          field={'input.numbers'}
          filter={v => v.match(/[2-9]/)}
          className={styles.input}
          stayFocused
        />
      </div>
    </main>
  </Provider>

export default App
