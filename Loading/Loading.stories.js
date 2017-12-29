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

import Loading from './Loading';

storiesOf('Components / Loading', module)
  .add('entry', () => (
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <View style={{flex: 1, backgroundColor: '#ccc', alignItems:'center', justifyContent:'center'}}><Text>other view</Text></View>
      <View style={{flex: 1}}>
        <Loading
          visible={boolean('visible', true)}
          simple={boolean('simple', false)}
          text={text('text', '')}
        />
      </View>
    </View>
  ))
