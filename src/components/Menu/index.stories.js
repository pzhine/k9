import React from 'react'
import { storiesOf } from '@storybook/react'
import Decorate from '../../../.storybook/Decorate'
import Menu from './'

storiesOf('Menu', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('default', () => <Menu />)
