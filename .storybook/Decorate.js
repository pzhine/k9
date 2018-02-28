import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import store from '../src/redux/configureStore'

const containerStyle = {
  padding: '24px',
  backgroundColor: '#999',
  height: '100vh'
}

const Decorate = ({ story, style = {} }) =>
  <MemoryRouter>
    <Provider store={store}>
      <div style={{ ...containerStyle, ...style }}>
        {story}
      </div>
    </Provider>
  </MemoryRouter>

export default Decorate
