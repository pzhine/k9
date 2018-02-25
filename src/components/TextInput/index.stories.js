import React from 'react'
import { storiesOf } from '@storybook/react'
import store from '../../redux/configureStore'
import TextInput from './'

storiesOf('TextInput', module).add('default', () =>
  <TextInput store={store} field={'test.input1'} name={'Some Field'} />
)
