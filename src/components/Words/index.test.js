import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Words from './'

const mockStore = configureStore()
let currentStore
const cleanState = { app: { words: [] } }
const populatedState = { app: { words: ['cat', 'dog', 'cow'] } }
const wrapper = state => {
  currentStore = (state && mockStore(state)) || mockStore(cleanState)
  return mount(<Words store={currentStore} />)
}

it('should render an empty container with clean state', () => {
  expect(wrapper().find('.words').length).toBeGreaterThan(0)
})

it('should render the words with populated state', () => {
  expect(wrapper(populatedState).find('.word').at(0).text()).toEqual('cat')
  expect(wrapper(populatedState).find('.word').at(1).text()).toEqual('dog')
  expect(wrapper(populatedState).find('.word').at(2).text()).toEqual('cow')
})
