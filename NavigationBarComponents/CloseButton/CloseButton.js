/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Close as closeImage,
} from '../../images';
import styles from './CloseButton.styles';

const CloseButton = ({
  onPress,
  imageBg,
}: {
  onPress: () => void,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Image
      style={styles.image}
      source={imageBg || closeImage}
    />
  </TouchableOpacity>
);

export default CloseButton;
