// @flow
import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { batteryIcon } from '../images/index';
import styles from './VerticalImageLabel.styles';


type VerticalImageLabelProps = {
  source: ImageSource,
  description: string,
  descriptionFontSize?: number,
  descriptionColor?: string,
  marginVerticalCenter?: number,
  imageMargin?: number,
};

const VerticalImageLabel = ({
  source,
  description,
  descriptionFontSize = 16,
  descriptionColor = '#999999',
  marginVerticalCenter = 0,
  imageMargin = 0,
}: VerticalImageLabelProps) => (
  <View style={styles.container}>
    <Image
      style={[
        styles.image,
        {
          margin: imageMargin,
          marginBottom: (marginVerticalCenter / 2.0),
        },
      ]}
      source={batteryIcon}
    />
    <Text
      style={[
        styles.descriptionText,
        {
          marginTop: (marginVerticalCenter / 2.0),
          fontSize: descriptionFontSize,
          color: descriptionColor,
        },
      ]}
    >
      {description}
    </Text>
  </View>
);

export default VerticalImageLabel;
