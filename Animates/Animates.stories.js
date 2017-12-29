// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  Text,
} from 'react-native';

import Animates from './Animates';

storiesOf('Components / Animates', module)
  .add('demo', () => (
    <Animates visible={boolean('visible', true)} style={{backgroundColor: '#666', padding: 10, borderRadius: 5}}>
      <Text style={{color: '#fff', fontSize: 36}}>112333</Text>
    </Animates>
  ))
