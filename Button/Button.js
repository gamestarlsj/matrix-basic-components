// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import styles from './Button.styles';

type ButtonProps = {
  style?: StyleSheetTypes,
  disabled?: boolean,
  onPress: () => void,
  type?: string,
  opacity?: number,
  children: any,
  fontSize: number,
};

const Button = ({
  style,
  disabled = false,
  onPress,
  type = 'default',
  children,
  opacity = 0.02,
  fontSize,
}: ButtonProps) => (
  <View style={style}>
    {type === 'link' ? (
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.buttonInner,
          {
            paddingHorizontal: 0,
          },
        ]}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    ) : (
      <TouchableHighlight
        disabled={disabled}
        style={[
          styles.buttonInner,
          {
            paddingHorizontal: fontSize * 0.8,
          },
        ]}
        onPress={onPress}
        activeOpacity={1}
        underlayColor={`rgba(0, 0, 0, ${opacity})`}
      >
        {children}
      </TouchableHighlight>
    )}
  </View>
);

export default Button;
