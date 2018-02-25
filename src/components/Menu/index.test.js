import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Menu from './'

const mockStore = configureStore()
let currentStore
const inactiveState = {
  app: {
    menuIsActive: false,
  },
}
const activeState = {
  app: {
    menuIsActive: true,
  },
}
const wrapper = state => {
  currentStore = (state && mockStore(state)) || mockStore(inactiveState)
  return mount(
    <MemoryRouter>
      <Menu store={currentStore} />
    </MemoryRouter>
  ).find('.menu')
}

it('renders the hamburger', () => {
  expect(wrapper().find('button').length).toBe(1)
})

it('should not set isActive initially', () => {
  expect(wrapper().is('.isActive')).toBeFalsy()
})

it('should toggle INACTIVE=>ACTIVE on hamburger click', () => {
  wrapper().find('button').simulate('click')
  expect(currentStore.getActions()).toEqual([
    {
      payload: true,
      type: 'TOGGLE_MENU_ACTIVE',
    },
  ])
})

it('should toggle ACTIVE=>INACTIVE on hamburger click', () => {
  wrapper(activeState).find('button').simulate('click')
  expect(currentStore.getActions()).toEqual([
    {
      payload: false,
      type: 'TOGGLE_MENU_ACTIVE',
    },
  ])
})

it('should set INACTIVE on menu item click', () => {
  wrapper(activeState).find('a').first().simulate('click')
  expect(currentStore.getActions()).toEqual([
    {
      payload: false,
      type: 'TOGGLE_MENU_ACTIVE',
    },
  ])
})

it('should set isActive on hamburger click', () => {
  expect(wrapper(activeState).is('.isActive')).toBeTruthy()
})
