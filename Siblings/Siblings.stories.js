// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  View,
  Text,
} from 'react-native';

import Button from '../Button';
import Toast from '../Toast';
import Alert from '../Alert';
import Loading from '../Loading';
import Siblings from './Siblings';

storiesOf('Components / Siblings', module)
  .add('entry', () => (
    <Siblings style={{alignSelf: 'stretch', padding: 20}}>
      <View style={{height: 30, backgroundColor: '#ccc', justifyContent: 'center', margin: 10}}>
        <Text>Siblings Title</Text>
      </View>
      <View>
        <Button
          fontColor="#fff"
          onPress={e => {
            Toast.error('雨一直下');
          }}
          title="弹出Toast"
          fontSize={24}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          fontColor="#fff"
          onPress={e => {
            Alert.show({text: '雨一直下'});
          }}
          title="弹出Alert"
          fontSize={24}
        />
      </View>
    </Siblings>
  ))
