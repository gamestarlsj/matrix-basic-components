// @flow
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import LoadingLottieView from './LoadingLottieView';
import Mask from '../Mask';
import styles from './Loading.styles';
import { loadingBgIcon } from '../images';

type LoadingProps = {
  visible?: boolean,
  text?: string,
  simple?: boolean,
  customIcon?: ImageSource,
  cusLoadingStyle?: StyleSheetTypes,
};

type LoadingState = {
  spinValue: Object,
};

class Loading extends React.Component<LoadingProps, LoadingState> {

  static defaultProps = {
    visible: false,
    simple: false,
    customIcon: loadingBgIcon,
    cusLoadingStyle: {},
  };

  renderIcon = () => {
    const { customIcon } = this.props;
    if (customIcon) {
      return (
        <LoadingLottieView />
      );
    }
    return (
      <ActivityIndicator size="large" />
    );
  };

  renderText = () => {
    const textStyle = {
      color: this.props.simple ? '#666666' : '#FFFFFF',
      marginTop: 20,
      fontSize: 16,
    };

    if (this.props.text) {
      return (
        <Text style={textStyle}>
          {this.props.text}
        </Text>
      );
    }
    return null;
  };

  renderContent() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <ImageBackground
          style={[
            styles.content,
            this.props.cusLoadingStyle,
          ]}
          source={loadingBgIcon}
          resizeMode="contain"
        >
          {this.renderIcon()}
        </ImageBackground>
        {this.renderText()}
      </View>
    );
  }

  render() {
    return (
      <Mask
        visible={this.props.visible}
        opacity={0}
        closeOnPress={false}
      >
        {this.renderContent()}
      </Mask>
    );
  }
}

export default Loading;
