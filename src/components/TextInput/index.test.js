import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import TextInput from './'

const mockStore = configureStore()
let currentStore
const cleanState = { app: { fields: { 'test.input1': '' } } }
const editedState = { app: { fields: { 'test.input1': 'someValue' } } }
const wrapper = state => {
  currentStore = (state && mockStore(state)) || mockStore(cleanState)
  return mount(
    <TextInput store={currentStore} field={'test.input1'} name={'Some Field'} />
  )
}

it('should render the input with the correct id', () => {
  expect(wrapper().find('input').instance().id).toEqual('test.input1')
})

it('should render the label', () => {
  expect(wrapper().find('label').text()).toEqual('Some Field')
  expect(wrapper().find('label').instance().htmlFor).toEqual('test.input1')
})

it('should populate the value from the store', () => {
  expect(wrapper(editedState).find('input').instance().value).toBe('someValue')
})

it('should update the store on change', () => {
  const input = wrapper().find('input')
  input.instance().value = 'anotherValue'
  input.simulate('change')
  expect(currentStore.getActions()).toEqual([
    {
      payload: {
        field: 'test.input1',
        value: 'anotherValue',
      },
      type: 'FORM_FIELD_CHANGED',
    },
  ])
})
