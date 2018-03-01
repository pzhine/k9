import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import initialState from '../../redux/app/initialState'
import Message from './'

let currentStore
beforeEach(() => {
  currentStore = configureStore()({
    app: {
      ...initialState,
      message: ['good', 'morning'],
      word: 'dave',
    },
  })
})

const wrapper = () => mount(<Message store={currentStore} />)

it('should render the message and the current word', () => {
  const words = wrapper().find('span')
  currentStore.getState().app.message.forEach((word, idx) => {
    expect(words.at(idx).text()).toEqual(word)
  })
  expect(words.last().text()).toEqual('dave')
})
