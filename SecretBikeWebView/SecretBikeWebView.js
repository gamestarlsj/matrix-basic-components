// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  WebView,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import createInvoke from './MessageInvoke';

import styles from './SecretBikeWebView.styles';

type SecretBikeWebViewProps = {
  source: any,
  pageOnLoad: Function,
  onReceiveMessage: Function,
};

export default class SecretBikeWebView extends Component<SecretBikeWebViewProps,
  > {
  props: SecretBikeWebViewProps;
  innerWebView: WebView;

  componentDidMount() {
    this.invoke
      .define('getPersonInfo', this.getPersonInfo)
      .define('messageWeb2RN', this.receiveMessageFromWeb);
  }

  invoke = createInvoke(() => this.innerWebView);

  getPersonInfo = () => ({
    name: 'testPerson',
  });

  callHtmlFunction = (functionName: string, args: any) => {
    this.invoke.fn
      [functionName](args)
      .then((result) => {})
      .catch(error => console.log(error));
  };

  receiveMessageFromWeb = (data: any) => {
    const { command, params } = data || {};
    const { onReceiveMessage } = this.props;
    onReceiveMessage && onReceiveMessage(command, params);
  };

  pageOnload = (data: any) => {
    const { pageOnLoad } = this.props;
    pageOnLoad && pageOnLoad(data);
  };

  renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color="gray" />
      <Text>加载中...</Text>
    </View>
  );

  reload = () => {
    // todo reload
  };

  renderError = (errorMessage: any) => (
    <TouchableWithoutFeedback
      onPress={this.reload}
      style={styles.loadingContainer}
    >
      <View style={styles.errorView}>
        <Text>{errorMessage}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  renderWebView = () => {
    const patchPostMessageFunction = function () {
      const originalPostMessage = window.postMessage;
      const patchedPostMessage = function (message, targetOrigin, transfer) {
        originalPostMessage(message, targetOrigin, transfer);
      };
      (patchedPostMessage: Object).toString = function () {
        return String(Object.hasOwnProperty).replace(
          'hasOwnProperty',
          'postMessage',
        );
      };
      window.postMessage = patchedPostMessage;
    };
    const patchPostMessageJsCode = `(${String(patchPostMessageFunction)})()`;
    return (
      <WebView
        ref={(web) => {
          this.innerWebView = web;
        }}
        source={this.props.source}
        injectedJavaScript={patchPostMessageJsCode}
        onMessage={this.invoke.listener}
        renderLoading={this.renderLoading}
        renderError={this.renderError}
        startInLoadingState={true}
        onLoad={this.pageOnload}
      />
    );
  };

  render() {
    return <View style={styles.root}>{this.renderWebView()}</View>;
  }
}
