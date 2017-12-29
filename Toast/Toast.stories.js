// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import Toast from './Toast';

storiesOf('Components / Toast', module)
  .add('entry', () => (
    <View style={{flex:1, alignSelf:'stretch'}}>
      <Toast duration={1000} visible text="It's a very very very very very very very long long long long long long string."/>
    </View>
  ))
  .add('each type', () => (
    <Toast visible={boolean('visible', true)} text="支付成功" type="success" duration={number('duration(ms)', 5000)}/>
  ))
