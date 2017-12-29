// @flow
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  errorLogin,
  searchBoxClean,
} from '../images/index';
import styles from './Input.styles';


type InputProps = {
  value?: string,
  style?: StyleSheetTypes,
  textInputStyle?: StyleSheetTypes,
  clearButtonStyle?: StyleSheetTypes,
  searchBoxClean?: boolean,
  fontSize?: number,
  lineHeight?: number,
  placeholder?: string,
  maxLength?: number,
  title?: string,
  titleWidth?: number,
  format?: string => string,
  borderColor?: string,
  borderWidth?: number,
  hideCleaner?: boolean,
  onChangeText?: string => void,
  inputOnFocus?: () => void,
  autoFocus?: boolean,
  clear: (type: string) => void,
  type: string,
};

// eslint 跟flowtype的版本可能不一致，这里可能用 InputState 代替 Object 会有eslint的错误提示
type InputState = {
  value?: string,
  placeholderStyle: Object,
  wrapperStyle: Object,
};

class Input extends React.Component<InputProps, InputState> {
  $input: any;

  static defaultProps = {
    searchBoxClean: false,
    fontSize: 18,
    lineHeight: 1.6,
    placeholder: 'Please input something here',
    maxLength: 40,
    borderColor: '#d6d6d6',
    borderWidth: StyleSheet.hairlineWidth,
    format: val => val,
    hideCleaner: false,
    autoFocus: false,
  };

  state = {
    value: this.props.value,
    wrapperStyle: {
      borderBottomColor: this.props.borderColor,
      borderBottomWidth: this.props.borderWidth,
    },
  };

  componentWillReceiveProps({ value }: InputProps) {
    this.setState({
      value,
    });
  }

  get value(): void | number | string {
    return this.state.value;
  }

  focus = () => {
    if (this.$input && this.$input.focus) this.$input.focus();
  };

  blur = () => {
    if (this.$input && this.$input.blur) this.$input.blur();
  };

  renderTitle() {
    const title = this.props.title;
    const width = this.props.titleWidth;
    const fontSize = this.props.fontSize;

    return title ? (
      <Text style={[styles.title, { width, fontSize }]}>
        {title}
      </Text>
    ) : null;
  }

  clear = () => {
    if (this.props.clear) {
      this.props.clear(this.props.type);
    } else {
      this.setState({
        value: '',
      });
      if (this.props.onChangeText) {
        this.props.onChangeText('');
      }
    }
  };

  inputOnBlur = () => {
    if (this.state && this.state.value === '') {
      this.setState({
        wrapperStyle: {
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 1,
        },
      });
    }
  };

  inputOnfocus = () => {
    this.setState({
      wrapperStyle: {
        borderBottomColor: '#fedc00',
        borderBottomWidth: 2,
      },
    });
    return this.props.inputOnFocus && this.props.inputOnFocus();
  };

  renderCleaner() {
    const cleanIcon = this.props.searchBoxClean ? searchBoxClean : errorLogin;
    return this.state.value && !this.props.hideCleaner ? (
      <TouchableOpacity
        // type="simple"
        // borderWidth={0}
        // lineHeight={1} 会导致安卓图片显示不全
        style={[styles.clearButton, this.props.clearButtonStyle]}
        onPress={this.clear}
      >
        <Image
          source={cleanIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ) : null;
  }

  render() {
    const {
      value,
      style,
      textInputStyle,
      title,
      titleWidth,
      format,
      borderColor,
      borderWidth,
      hideCleaner,
      onChangeText,
      // 以上都是被劫持的属性，如果需要传给一样的名称，可以扩展类似“textInputStyle”
      ...inputProps
    } = this.props;
    const fontSize = this.props.fontSize || 0;
    const lineHeight = this.props.lineHeight || 0;
    const inputStylyCoverable = {
      textAlign: this.props.title ? 'left' : 'center',
    };
    const inputStylyComputed = {
      padding: 0,
      height: fontSize * lineHeight,
      lineHeight: fontSize * lineHeight * 0.8,
    };
    return (
      <View style={[
        styles.container,
        this.state.wrapperStyle,
        this.props.style,
      ]}
      >
        {this.renderTitle()}
        <TextInput
          {...inputProps}
          ref={(e) => { this.$input = e; }}
          value={this.state.value}
          maxLength={this.props.maxLength}
          onFocus={this.inputOnfocus}
          onBlur={this.inputOnBlur}
          style={[
            styles.input,
            inputStylyCoverable,
            this.props.textInputStyle,
            inputStylyComputed,
          ]}
          selectionColor="#218DFF"
          underlineColorAndroid="transparent"
          onChangeText={(newVal: string) => {
            this.setState({ value: newVal });
            if (this.props.onChangeText) this.props.onChangeText(newVal);
          }}
        />
        {this.renderCleaner()}
      </View>
    );
  }
}

export default Input;
