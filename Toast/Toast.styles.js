// @flow
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 200,
    bottom: 0,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 25,
    minWidth: 180,
    paddingLeft: 37,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 7,
  },
});
