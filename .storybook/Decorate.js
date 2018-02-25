import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import store from '../src/redux/configureStore'

const Decorate = ({ story }) =>
  <MemoryRouter>
    <Provider store={store}>
      {story}
    </Provider>
  </MemoryRouter>

export default Decorate
