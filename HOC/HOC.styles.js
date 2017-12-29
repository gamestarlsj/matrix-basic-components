// @flow
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  rootView: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenWidth,
    height: ScreenHeight,
  },
});
