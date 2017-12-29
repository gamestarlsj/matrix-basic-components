// @flow
import React from "react";
import { View, Text } from "react-native";

// import styles from './Progress.styles';

type ProgressProps = {};

export default class Progress extends React.Component<ProgressProps> {
  renderScene = () => <Text>Hello World</Text>;

  render() {
    return (
      <View style={{ flex: 1, alignSelf: "stretch" }}>
        {this.renderScene()}
      </View>
    );
  }
}
