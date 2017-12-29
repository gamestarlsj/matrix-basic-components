// @flow
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  // Dimensions,
} from 'react-native';

import styles from './KeyboardAvoidingView.styles';

type KAVProps = {
  offset?: number, // IOS里面好像不会包含头部导航的高度，所有使用了头部导航的页面（header is not null）需要处理这部分
  style?: Object | number,
  children?: any,
};

// const ScreenWidth = Dimensions.get('window').width;
// const offset = (Platform.OS === 'android') ? -200 : 0;
// const responsiveDiff = (offset + 85) * (ScreenWidth / 375);

const KAV = ({
  offset = 0,
  style,
  children,
}: KAVProps) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'android' ? undefined : 'padding'}
    style={styles.rootView}
    keyboardVerticalOffset={offset}
  >
    <View
      style={[
        style, // ！！外界的style，如果设置margin，在KeyboardAvoidingView里面实现IOS会有问题
        {
          flex: 1,
          alignSelf: 'stretch',
        },
      ]}
    >
      {children}
    </View>
  </KeyboardAvoidingView>
);

export default KAV;
