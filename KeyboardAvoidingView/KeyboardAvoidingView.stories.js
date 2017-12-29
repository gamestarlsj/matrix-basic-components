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
  TextInput,
  // KeyboardAvoidingView,
} from 'react-native';

import KeyboardAvoidingView from './KeyboardAvoidingView';
const renderHeader = () => (
  <View style={{ height: 30, backgroundColor: '#eee'}}>
    <Text>Header</Text>
  </View>
);
const renderContent = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <TextInput
      style={{
        width: 200,
        height: 50,
      }}
      placeholder="always keep in center"
    />
  </View>
);
const renderFooter = () => (
  <View style={{ height: 30, backgroundColor: '#eee'}}>
    <Text>Footer</Text>
  </View>
);

storiesOf('Scenes / KeyboardAvoidingView', module)
  .add('pageView', () => (
    <KeyboardAvoidingView>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </KeyboardAvoidingView>
  ))
