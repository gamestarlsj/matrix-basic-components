// @flow
import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './Mask.styles';
import Animates from '../Animates';

type MaskProps = {
  style?: StyleSheetTypes,
  children?: any,
  visible?: boolean,
  closeOnPress?: boolean,
  opacity?: number,
};

type MaskState = {
  visible?: boolean,
};

export default class Mask extends React.Component<MaskProps, MaskState> {
  props: MaskProps;
  static defaultProps = {
    visible: false,
    closeOnPress: true,
    opacity: 0.35,
  };

  state = {
    visible: this.props.visible,
  };

  componentWillReceiveProps(nextProps: MaskProps) {
    this.setState({ visible: nextProps.visible });
  }

  render() {
    const renderContent = () => (
      <View
        onStartShouldSetResponder={() => true}
      >
        {this.props.children}
      </View>
    );
    const onPressOverlay = () => {
      if (this.props.closeOnPress) {
        this.setState({ visible: false });
      }
    };

    const wrapperStyle = {
      backgroundColor: `rgba(0, 0, 0, ${this.props.opacity || 0})`,
    };

    return this.state.visible ? (
      <TouchableWithoutFeedback
        onPress={onPressOverlay}
      >
        <View
          style={[
            styles.container,
            wrapperStyle,
            this.props.style,
          ]}
        >
          <Animates
            visible={this.props.visible}
            inDuration={300}
          >
            {renderContent()}
          </Animates>
        </View>
      </TouchableWithoutFeedback>
    ) : null;
  }
}
