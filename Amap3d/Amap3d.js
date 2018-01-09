// @flow
import { map } from 'lodash';
import {
  MapView,
  Marker,
  Polygon,
} from 'react-native-amap3d';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Amap3dInterface from './Amap3d.interface';
import { Mask } from 'matrix-basic-components';
import React, { Component } from 'react';

const { width, height } = Dimensions.get('window');

type Amap3dProps = {
  // 自定义车辆图标，数据，样式
  bikeMarkerImg? : string,
  bikeMarkerStyle? : StyleSheetType,
  bikeMarkerData? : Array,
  // 自定义停车区图标，数据，样式
  parkMarkerImg? : string,
  parkMarkerStyle? : StyleSheetType,
  parkMarkerData? : Array,
  // 停车区域数据，样式
  parkAreaData? : Array,
  parkAreaStyle? : object,
  // 初始化位置
  myPosition: object,
  // 定位按钮回调
  restartLocation: Function,
};

export default class Amap3d extends React.Component<Amap3dProps> {
  constructor(props) {
    super(props);
    this.state = {
      bikeMarkerData: this.props.bikeMarkerData ? this.props.bikeMarkerData : [],
      parkMarkerData: this.props.parkMarkerData ? this.props.parkMarkerData : [],
      parkAreaData: this.props.parkAreaData ? this.props.parkAreaData : [],
      centerPosition: this.props.myPosition,
    };
    this.myPosition = this.props.myPosition;
    this.Amap3dInterface = {};
  }

  _log(actionName, nativeEvent) {
    console.log(`${actionName}: ${nativeEvent}`);
  }

  _logPressEvent = ({nativeEvent}) => this._log('onPress', nativeEvent)
  _logLongPressEvent = ({nativeEvent}) => this._log('onLongPress', nativeEvent)
  _logLocationEvent = ({nativeEvent}) => this.updateLocation(nativeEvent)
  // _logStatusChangeEvent = ({nativeEvent}) =>
  // this.StatusChangeEvent(nativeEvent);

  //渲染自行车图标
  renderBikeMaker() {
    return map(this.state.bikeMarkerData, (position, index) => {
      return (
        <Marker
          key={index}
          icon={() => (
            <Image
              source={this.props.bikeMarkerImg || require('./assets/bikeMarker.png')}
              style={this.props.bikeMarkerStyle || {}}
            />
          )}
          coordinate={position}
        />
      );
    });
  }

  //渲染停车区图标
  renderParkerMaker() {
    return map(this.state.parkMarkerData, (position, index) => {
      return (
        <Marker
          key={index}
          icon={() => (
            <Image
              source={this.props.parkMarkerImg || require('./assets/parking.png')}
              style={this.props.parkMarkerStyle || {}}
            />
          )}
          coordinate={position}
        />
      );
    });
  }

  componentDidMount() {
    this.Amap3dInterface = new Amap3dInterface(this.mapView);
  }

  //更新用户当前位置
  updateLocation = (nativeEvent, callback) => {
    const { longitude, latitude } = nativeEvent;
    this.myPosition = {
      latitude: latitude,
      longitude: longitude
    }
  }

  //回到定位位置，可回调
  restartLocation = (callback) => {
    this.Amap3dInterface.restartLocation(this.myPosition);
    callback && callback();
  }


  /**
  * 渲染停车区及其样式
  * 样式对象格式
  * strokeWidth int
  * strokeColor string
  * fillColor string
  * coordinates array
  * */

  renderParkerArea() {
    return map(this.state.parkAreaData, (position, index) => {
      return (
        <Polygon
          key={index}
          strokeWidth={5}
          strokeColor='rgba(0, 0, 255, 0.5)'
          fillColor='rgba(0, 0, 255, 0.5)'
          coordinates={position}
        />
      );
    });
  }

  /**
  * 渲染中心图标
  * */
  renderCenterIcon(position) {
    return (
      <Marker
        title='这是一个可拖拽的标记'
        icon={() => (
          <Image
            source={this.props.centerIcon || require('./assets/index.png')}
            style={this.props.parkMarkerStyle || {}}
          />
        )}
        coordinate={this.state.centerPosition}
      />
    )
  }

  /**
  * 渲染地图组件
  * */
  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => this.mapView = ref}
          locationEnabled
          locationInterval={10000}
          distanceFilter={10}
          onPress={this._logPressEvent}
          onLongPress={this._logLongPressEvent}
          onLocation={this._logLocationEvent}
          onStatusChange={this._logStatusChangeEvent}
          onStatusChangeComplete={this._logStatusChangeCompleteEvent}
          zoomLevel={18}
          style={{
            flex: 1,
            height,
            width,
            borderWidth: 1,
            borderColor: 'black',
          }}
        >
          {this.renderBikeMaker()}
          {this.renderParkerMaker()}
          {this.renderParkerArea()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
