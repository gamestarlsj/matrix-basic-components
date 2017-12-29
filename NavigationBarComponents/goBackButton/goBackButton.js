// @flow
import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  goBackImage,
} from '../../images';
import styles from './goBackButton.styles';

type goBackButtonProps = {
  onPress?: Function,
  customStyle?: Object,
};

class goBackButton extends React.Component<goBackButtonProps> {

  onExit = () => {
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onExit}
      >
        <Image
          style={[
            styles.image,
            this.props.customStyle,
          ]}
          source={goBackImage}
        />
      </TouchableOpacity>
    );
  }
}

export default goBackButton;
