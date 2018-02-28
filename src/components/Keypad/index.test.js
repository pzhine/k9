import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router'
import Keypad from './'
import keys from '../../content/keypad.json'
import actions from '../../redux/app/actions'

actions.pressKey = jest.fn(() => ({ type: 'MOCK' }))
beforeEach(() => {
  actions.pressKey.mockClear()
})

const wrapper = () =>
  mount(
    <MemoryRouter>
      <Keypad store={configureStore([thunk])()} />
    </MemoryRouter>
  ).find('.keypad')

it('renders 4 rows of keys', () => {
  expect(wrapper().find('.row').length).toBe(4)
})

it('renders all the keys in order', () => {
  const componentKeys = wrapper().find('button')
  keys.forEach((key, idx) => {
    const keyButton = componentKeys.at(idx)
    expect(keyButton.find('.number').text()).toEqual(key.number)
    if (key.letters) {
      expect(keyButton.find('.letters').text()).toEqual(key.letters)
    }
  })
})

it('should dispatch KEY_PRESSED action on button press', () => {
  wrapper().find('button').at(0).simulate('click')
  expect(actions.pressKey).toBeCalledWith('1')
})

it('should dispatch KEY_PRESSED on numeric key down', () => {
  const component = wrapper()
  component.simulate('keyDown', { key: '1' })
  component.simulate('keyUp', { key: '1' })
  expect(actions.pressKey).toBeCalledWith('1')
})

it('should NOT dispatch KEY_PRESSED on non-numeric key down', () => {
  const component = wrapper()
  component.simulate('keyDown', { key: 'a' })
  component.simulate('keyUp', { key: 'a' })
  expect(actions.pressKey).not.toBeCalled()
})
