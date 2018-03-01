import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { Link } from 'react-router-dom'
import syncHistory from './syncHistory'

const mockStore = configureStore()()
const Dummy = () => <Link to="/a/new/path">go</Link>
const SyncedDummy = syncHistory({
  store: mockStore,
  locationChangedAction: path => ({
    type: 'LOCATION_CHANGED',
    payload: { path },
  }),
})(Dummy)

const wrapper = () =>
  mount(
    <MemoryRouter initialEntries={['/a/path']} initialIndex={0}>
      <SyncedDummy />
    </MemoryRouter>
  )

beforeEach(() => {
  mockStore.clearActions()
})

it('should dispatch the location changed action when mounting', () => {
  wrapper()
  expect(mockStore.getActions()[0]).toEqual({
    payload: { path: '/a/path' },
    type: 'LOCATION_CHANGED',
  })
})

it('should dispatch the location changed action when location changes', () => {
  wrapper().find('a').simulate('click', { button: 0 })
  expect(mockStore.getActions()[1]).toEqual({
    payload: { path: '/a/new/path' },
    type: 'LOCATION_CHANGED',
  })
})
