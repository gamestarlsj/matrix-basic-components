// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './VerticalDescLabel.styles';

type VerticalDescLabelProps = {
  value: string,
  description: string,
  valueFontSize?: number,
  valueColor?: string,
  descriptionFontSize?: number,
  descriptionColor?: string,
  marginVerticalCenter?: number,
};

const VerticalDescLabel = ({
  value,
  description,
  valueFontSize = 36,
  valueColor = '#333333',
  descriptionFontSize = 16,
  descriptionColor = '#999999',
  marginVerticalCenter = 0,
}: VerticalDescLabelProps) => (
  <View style={styles.container}>
    <Text
      style={[
        styles.valueText,
        {
          fontSize: valueFontSize,
          color: valueColor,
          marginBottom: (marginVerticalCenter / 2.0),
        },
      ]}
    >
      {value}
    </Text>
    <Text style={[
      styles.descriptionText,
      {
        fontSize: descriptionFontSize,
        color: descriptionColor,
        marginTop: (marginVerticalCenter / 2.0),
      },
    ]}
    >
      {description}
    </Text>
  </View>
);

export default VerticalDescLabel;
