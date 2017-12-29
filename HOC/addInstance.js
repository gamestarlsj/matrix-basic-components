import React from 'react';

const refsHOC = WrappedComponent => class RefsHOC extends React.Component {
  static displayName = 'RefsHOC'
  static instance

  render() {
    const props = {
      ...this.props,
    };

    props.ref = (c) => {
      RefsHOC.instance = c;
    };
    return (
      <WrappedComponent {...props} />
    );
  }
};

export default refsHOC;
