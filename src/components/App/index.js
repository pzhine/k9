/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import actions from '../../redux/app/actions'
import transitionProps from '../../hoc/transitionProps'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import ScrollManager from '../ScrollManager'
import Fade from '../Fade'
import Nav from '../Nav'

const onClick = () => {
  if (!store.getState().app.menuIsActive) {
    return
  }
  store.dispatch(actions.toggleMenuIsActive(false))
}

const App = ({ location, transitions }) =>
  <Provider store={store}>
    <ScrollManager location={location}>
      <main className={styles.app} onClick={onClick}>
        <Nav />
        <div className={styles.content}>
          <Route
            exact
            location={location}
            path="/"
            render={() =>
              <Fade isTransitioning={transitions.location.isActive}>
                <h1>Home</h1>
              </Fade>}
          />
          <Route
            exact
            location={location}
            path="/about"
            render={() =>
              <Fade isTransitioning={transitions.location.isActive}>
                <h1>About</h1>
              </Fade>}
          />
        </div>
      </main>
    </ScrollManager>
  </Provider>

export default compose(
  withRouter,
  transitionProps({
    propsToTransition: () => ({
      location: {
        duration: 300,
        compare: ({ pre, post }) => pre.pathname === post.pathname,
      },
    }),
  })
)(App)
