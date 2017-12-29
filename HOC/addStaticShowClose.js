import React from 'react';

import {
  compose,
  addTimer,
} from '../HOC';

type Props = {
  duration?: number,
  visible?: boolean,
};

// 被包裹的组件如果也有duration属性，可能需要用别的名称，不要会同时影响，
// 这里不止flow能不能做限制。。

const addStaticShowClose = WrappedComponent =>
  class StaticShowClose extends React.Component {
    props: Props
    static defaultProps = {
      duration: 0,
    };

    static show({
      duration,
      ...props
    }: Props) {
      if (this.instance) {
        this.instance.setState(props);
        this.instance.showInstance(duration);
      }
    }

    static close() {
      if (this.instance) {
        this.instance.closeInstance();
      }
    }

    static displayName = 'addStaticShowClose'

    constructor() {
      super();
      StaticShowClose.instance = this;
    }

    state = {
      visible: false,
    }

    componentWillMount() {
      this.setState({
        duration: this.props.duration,
        visible: this.props.visible,
      });

      if (this.props.visible) this.showInstance();
    }

    componentWillReceiveProps({ duration, ...states }: ToastProps) {
      this.setState(states);
      // if (this.props.visible) this.showInstance();
    }

    componentWillUnmount() {
      // this.closeInstance();
      // this.clearTimeout();
      // StaticShowClose.instance = null;
    }

    showInstance(
      duration?: ?number = this.props.duration,
    ) {
      this.setState({
        duration,
        visible: true,
      });
      if (duration && this.clearTimeout) {
        this.clearTimeout();

        this.setTimeout(() => {
          this.closeInstance();
        }, duration);
      }
    }

    closeInstance() {
      if (this.clearTimeout) this.clearTimeout();

      this.setState({
        visible: false,
      });
    }

    render() {
      const { visible, ...proxyProps } = this.state;
      const props = {
        ...this.props,
        visible,
        ...proxyProps,
      };

      return (
        <WrappedComponent {...props} />
      );
    }
};

export default c => compose(addTimer, addStaticShowClose)(c);
