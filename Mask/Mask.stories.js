// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  Text,
  View,
} from 'react-native';

import Mask from './Mask';

storiesOf('Components / Mask', module)
  .add('demo', () => (
    <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#ccc'}}>
      <Mask visible={boolean('visible', true)}>
        <Text style={{color: '#fff'}}>Mask</Text>
      </Mask>
    </View>
  ))
