// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number, select } from '@storybook/addon-knobs';
import {
  View,
  Text,
} from 'react-native';

import Button from '../Button';

storiesOf('Components / Button', module)
  .add('entry', () => (
    <View style={{alignSelf: 'stretch', padding: 10,}}>
      <Button
        type={select('Type', ['plain', 'default', 'simple', 'link'], 'default')}
        title={text('Title', '确定')}
        color={text('color', '#FFF000')}
        fontColor={text('TextColor', '#666666')}
        onPress={()=> {
          console.log('press');
        }}
        borderRadius={number('Radius', 5)}
        disabled={boolean('disabled', false)}
      />
    </View>
  ))
