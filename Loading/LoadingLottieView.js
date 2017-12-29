// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';

const loadingJson = require('./lottie_loading.json');

const item = {
  height: 58,
  width: 58,
};

type RefreshingLottieViewProps = {
  styles?: Object,
};

export default class RefreshingLottieView extends Component<
  RefreshingLottieViewProps,
  > {
  animation: any;

  static defaultProps = {
    styles: {},
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View
        style={[item, this.props.styles]}
      >
        <LottieView
          style={item}
          ref={(animation) => {
            this.animation = animation;
          }}
          source={loadingJson}
          imageAssetsFolder={'Images/Loading'}
        />
      </View>
    );
  }
}

