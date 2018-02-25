import React from 'react'
import { storiesOf } from '@storybook/react'
import Decorate from '../../../.storybook/Decorate'
import Nav from './'

storiesOf('Nav', module)
  .addDecorator(story => <Decorate story={story()} />)
  .add('default', () => <Nav />)
