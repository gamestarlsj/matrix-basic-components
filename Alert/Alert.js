// @flow
import React from "react";
// import hoistNonReactStatic from 'hoist-non-react-statics';
import { Text, View } from "react-native";
import { addStaticShowClose } from "../HOC";
import Mask from "../Mask";
import Button from "../Button";
import styles from "./Alert.styles";

type AlertProps = {
  visible?: boolean,
  title?: string,
  text: string,
  textStyle?: StyleSheetTypes,
  onConfirm?: () => void,
  buttonText?: string,
  buttonColor?: string
};

class Alert extends React.Component<AlertProps, Object> {
  static defaultProps = {
    visible: false,
    title: "通知",
    buttonText: "我知道了",
    buttonColor: "#666"
  };

  state = {
    visible: false
  };

  componentWillReceiveProps({ visible }) {
    this.setState({ visible });
  }

  renderContent() {
    const confirm = () => {
      if (this.props.onConfirm) {
        this.props.onConfirm();
      }
      this.setState({
        visible: false
      });
    };

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={[styles.content, this.props.textStyle]}>
            {this.props.text}
          </Text>
        </View>
        <Button
          type="plain"
          title={this.props.buttonText}
          onPress={confirm}
          fontColor={this.props.buttonColor}
          fontSize={18}
          borderRadius={0}
        />
      </View>
    );
  }

  render() {
    return (
      <Mask visible={this.state.visible} closeOnPress={false}>
        {this.renderContent()}
      </Mask>
    );
  }
}

export default addStaticShowClose(Alert);
