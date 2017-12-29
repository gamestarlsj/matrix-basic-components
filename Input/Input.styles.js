// @flow
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#333',
    marginRight: 25,
  },
  input: {
    flex: 1,
    color: '#333',
  },
  clearButton: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
