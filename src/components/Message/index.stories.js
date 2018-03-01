import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import initialState from '../../redux/app/initialState'
import Decorate from '../../../.storybook/Decorate'
import Message from './'

const msg = 'good morning dave it is very nice to see you'.split(' ')

const mockStore = (message = msg, word = '') =>
  configureStore()({ app: { ...initialState, word, message } })

storiesOf('Message', module)
  .add('10 words', () => <Decorate story={<Message />} store={mockStore()} />)
  .add('3 words', () =>
    <Decorate story={<Message />} store={mockStore(msg.slice(0, 3))} />
  )
  .add('2 words', () =>
    <Decorate story={<Message />} store={mockStore(msg.slice(0, 2))} />
  )
  .add('1 words', () =>
    <Decorate story={<Message />} store={mockStore(msg.slice(0, 1))} />
  )
  .add('1 letter', () =>
    <Decorate story={<Message />} store={mockStore([], 'd')} />
  )
