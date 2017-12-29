// @flow
import React from 'react';
import {
  View,
} from 'react-native';

import Toast from '../Toast';
import Alert from '../Alert';

type SiblingsProps = {
  children?: any,
  style?: Object,
};

export default class Siblings extends React.Component<SiblingsProps> {
  $root = undefined

  render() {
    return (
      <View
        ref={(c) => { this.$root = c; }}
        {...this.props}
        style={[
          { flex: 1, alignSelf: 'stretch', ...this.props.style },
        ]}
      >
        {this.props.children}
        <Toast duration={5000} />
        <Alert />
      </View>
    );
  }
}
