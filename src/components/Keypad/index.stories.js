import React from 'react'
import { storiesOf } from '@storybook/react'
import Decorate from '../../../.storybook/Decorate'
import Keypad from './'

storiesOf('Keypad', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('default', () => <Keypad />)
