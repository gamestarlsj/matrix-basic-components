// @flow
import React from 'react';
import {
  Animated,
} from 'react-native';

import styles from './Animates.styles';


type AnimatesProps = {
  style?: StyleSheetTypes,
  children?: any,
  animateType?: 'default' | 'fade',
  visible?: boolean,
  inDuration?: number,
  outDuration?: number,
};

export default class Animates extends React.Component<AnimatesProps, Object> {
  static defaultProps = {
    animateType: 'default',
    visible: false,
    inDuration: 1000,
    outDuration: 100,
  };

  state = {
    opacityValue: new Animated.Value(0),
  }

  componentWillMount() {
    if (this.props.visible) {
      this.show();
    }
  }

  componentWillReceiveProps(nextProps: AnimatesProps) {
    if (nextProps.visible) {
      this.show();
    } else {
      this.closeUp();
    }
  }

  componentWillUnmount() {
    this.closeUp();
  }

  showAnimate = undefined;
  closeAnimate = undefined;

  show() {
    if (this.closeAnimate) this.closeAnimate.stop();
    if (this.showAnimate) this.showAnimate.stop();

    this.showAnimate = Animated.timing(
      this.state.opacityValue,
      {
        toValue: 1,
        duration: this.props.inDuration,
      },
    ).start();
  }

  closeUp() {
    if (this.closeAnimate) return;
    if (this.showAnimate) this.showAnimate.stop();

    this.closeAnimate = Animated.timing(
      this.state.opacityValue,
      {
        toValue: 0,
        duration: this.props.outDuration,
      },
    ).start(() => {
      // if (this.props.onClose) {
      //   this.props.onClose().bind(this);
      // }
    });
  }

  render() {
    const computedStyle = {
      opacity: this.state.opacityValue,
    };
    return (
      <Animated.View
        style={[
          styles.rootView,
          this.props.style,
          computedStyle,
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
