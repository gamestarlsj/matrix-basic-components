// @flow
import React from 'react';
import {
} from 'react-native';

// import styles from './HOC.styles';


type HOCProps = {

};

const iiHOC = (WrappedComponent: any) => (props: HOCProps) => (
  <WrappedComponent {...props} />
);

export default {
  iiHOC,
};
