// @flow
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { addStaticShowClose } from '../HOC';

import styles from './Toast.styles';
import * as images from '../images/index';

import Mask from '../Mask';

type ToastProps = {
  text?: string,
  type?: string,
  visible?: boolean,
};

class Toast extends React.Component<ToastProps> {
  static defaultProps = {
    text: '',
    type: 'default',
  };

  static timer;
  static show: Function;
  static close: Function;

  static success(text: string) {
    this.show({ text, type: 'success' });
  }

  static error(text: string) {
    this.show({ text, type: 'error' });
  }

  static successWithCallback(text, time, resumeCallback) {
    this.success(text);
    this.timer = setTimeout(() => {
      if (resumeCallback) {
        resumeCallback();
      }
    }, time);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    let img;
    switch (this.props.type) {
      case 'success':
      case 'error':
        img = images[this.props.type];
        break;
      default:
        break;
    }
    const showImg = () =>
      img && <Image style={styles.image} source={img} resizeMode="cover" />;
    const ScreenHeight = Dimensions.get('window').height;
    return (
      <Mask
        visible={this.props.visible}
        style={{ top: -0.25 * ScreenHeight }}
        opacity={0}
        closeOnPress={true}
      >
        <View style={styles.content}>
          {showImg()}
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </Mask>
    );
  }
}

export default hoistNonReactStatic(addStaticShowClose(Toast), Toast);
