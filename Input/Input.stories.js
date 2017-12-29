// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number, select } from '@storybook/addon-knobs';
import {
  View,
} from 'react-native';

import Input from './Input';

storiesOf('Components / Input', module)
  .add('entry', () => (
    <View style={{alignSelf: 'stretch', paddingLeft:25}}>
      <Input
        style={{marginBottom: 30}}
        placeholder = {text('placeholder', '请输入证件号码')}
        keyboardType = {select('键盘类型', ['number-pad', 'default'] , 'number-pad')}
        title = {text('Title(可以不设置)', '身份证号')}
        onChangeText={(val) => {
          console.log(val);
        }}
        value={text('value'), '1234'}
      />
    </View>
  ))
