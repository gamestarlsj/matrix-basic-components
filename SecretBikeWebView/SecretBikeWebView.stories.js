// @flow
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import {
  Text,
  Button,
  View,
} from 'react-native';

import SecretBikeWebView from './SecretBikeWebView';

const renderTestComponent = () => {
  var webRef;
  return (
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <SecretBikeWebView
        ref={r => webRef = r}
        source={require('./testWebPage.html')}
      />
      <Button
        onPress={() => { if (webRef) webRef.callHtmlFunction('testWebFunction', {'data': 'test rn data'})}}
        title={'【In RN】call html funcion'}
      />
    </View>
  );
}

storiesOf('Components / SecretBikeWebView', module)
  .add('demo', () => (
    renderTestComponent()
  ))
