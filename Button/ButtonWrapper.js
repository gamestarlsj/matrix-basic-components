// @flow
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import styles from './Button.styles';
import Button from './Button';


type ButtonProps = {
  style?: StyleSheetTypes,
  disabled?: boolean,
  onPress: () => void,
  title?: string,
  children?: any,
  type?: 'default' | 'plain' | 'simple' | 'link',
  color?: string,
  paddingLR?: number,
  fontSize?: number,
  fontColor?: string,
  borderRadius?: number,
  borderWidth?: number,
  borderColor?: string,
  lineHeight?: number,
};

const ButtonWrapper = ({
  style = {},
  disabled = false,
  onPress,
  title = '',
  children,
  type = 'default',
  color = '#fedc00',
  fontSize = type === 'simple' ? 12 : 15,
  fontColor = '#6c664f',
  fontWeight,
  borderColor = '#DCDCDC',
  borderRadius = 23,
  borderWidth = type === 'simple' ? StyleSheet.hairlineWidth : 0,
  lineHeight = { simple: 2, link: 1, default: 0 }[type] || 2.8,
}: ButtonProps) => (
  <Button
    style={[
      styles.container,
      (() => {
        const btnStyle: Object = {
          alignSelf: 'stretch',
          borderRadius,
          borderWidth,
          borderColor,
          shadowColor: '#f0c002',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 11 },
          shadowRadius: 18,
        };

        switch (type) {
          case 'simple':
          case 'link':
            btnStyle.alignSelf = 'center';
            btnStyle.overflow = 'hidden';
            break;
          case 'plain':
            break;
          default:
            btnStyle.backgroundColor = color ;
            break;
        }

        if (disabled) {
          btnStyle.opacity = 0.5;
          btnStyle.backgroundColor = '#ececec';
          btnStyle.shadowOpacity = 0;
        }

        return btnStyle;
      })(),
      // 直接操纵样式，不推荐
      style,
    ]}
    fontSize={fontSize}
    disabled={disabled}
    onPress={disabled ? () => {} : onPress}
    type={type}
  >
    <View style={[
      styles.content,
      {
        height: fontSize * lineHeight,
      },
    ]}
    >
      {title ? <Text
        style={[styles.innerText, {
          fontSize,
          fontWeight,
          color: fontColor,
        }]}
        includeFontPadding={false}
      >
        {title}
      </Text> : null}
      {children}
    </View>
  </Button>
);

export default ButtonWrapper;
