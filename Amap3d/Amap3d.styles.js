// @flow
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
// const ScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#00ff00',
    margin: 10,
  },
  centerIconView: {
    position: 'absolute'
  }
});
