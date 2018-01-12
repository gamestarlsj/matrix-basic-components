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
  TouchableWithoutFeedback
} from 'react-native';
import { Mask } from 'matrix-basic-components';
import React, { Component } from 'react';
import styles from './Amap3d.styles'

const { width, height } = Dimensions.get('window');

type Amap3dProps = {
  // 自定义车辆图标，数据，样式，点击回调
  bikeMarkerImg? : string,
  bikeMarkerStyle? : StyleSheetType,
  bikeMarkerData? : Array,
  bikeMarkerOnPress?: Function,
  // 自定义停车区图标，数据，样式，点击回调
  parkMarkerImg? : string,
  parkMarkerStyle? : StyleSheetType,
  parkMarkerData? : Array,
  parkMarkerOnPress?: Function,
  // 停车区域数据，样式
  parkAreaData? : Array,
  parkAreaStyle? : object,
  // 初始化位置
  myPosition: object,
  // 是否展示中心点
  ifShowCenter?: Boolean,
  // 点击地图事件
  mapOnPress?: Function,
  // 地图缩放
  zoomLevel?: number,
};

export default class Amap3d extends React.Component<Amap3dProps> {
  constructor(props) {
    super(props);
    this.state = {
      bikeMarkerData: this.props.bikeMarkerData ? this.props.bikeMarkerData : [],
      parkMarkerData: this.props.parkMarkerData ? this.props.parkMarkerData : [],
      parkAreaData: this.props.parkAreaData ? this.props.parkAreaData : [],
      ifShowCenter: this.props.ifShowCenter ? this.props.ifShowCenter : true,
      myPosition: this.props.myPosition,
      zoomLevel: this.props.zoomLevel? this.props.zoomLevel: 18,
    };
    this.myPosition = this.props.myPosition;
    this.centerPosition = this.props.myPosition;
  }

  _log(actionName, nativeEvent) {
    console.log(nativeEvent);
  }

  PressEvent = ({nativeEvent}) => this.mapOnPress(nativeEvent)
  LongPressEvent = ({nativeEvent}) => this._log('onLongPress', nativeEvent)
  LocationEvent = ({nativeEvent}) => this.updateLocation(nativeEvent)
  StatusChangeCompleteEvent = ({nativeEvent}) => {
    const { longitude, latitude } = nativeEvent;
    if(this.state.ifShowCenter){
      this.centerPosition = {
        latitude: latitude,
        longitude: longitude
      }
    }
  }

  /**
   * 渲染自行车图标
   * */
  renderBikeMaker() {
    return map(this.state.bikeMarkerData, (position, index) => {
      return (
        <Marker
          key={index}
          infoWindowEnabled={false}
          onPress={()=>{
            this.props.bikeMarkerOnPress && this.props.bikeMarkerOnPress(position, 'marker')
          }}
          icon={() => (
            <Image
              source={this.props.bikeMarkerImg || require('./assets/bikeMarker.png')}
              style={this.props.bikeMarkerStyle}
            />
          )}
          coordinate={position}
        />
      );
    });
  }

  /**
  * 渲染停车区图标
  * */
  renderParkerMaker() {
    return map(this.state.parkMarkerData, (position, index) => {
      return (
        <Marker
          infoWindowEnabled={false}
          key={index}
          onPress={()=>{
            this.props.parkMarkerOnPress && this.props.parkMarkerOnPress(position, index)
          }}
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

  /**
   * 规划路径时渲染中心图标
   * */
  renderCenterIconWhenRoute() {
    if(!this.state.ifShowCenter){
      return (
        <Marker
          icon={() => (
            <Image
              source={this.props.centerIconImg || require('./assets/index.png')}
              style={this.props.parkMarkerStyle || {}}
            />
          )}
          coordinate={this.centerPosition}
        />
      )
    }else {
      return null;
    }
  }

  /**
   * 更新用户当前位置
   * */
  updateLocation = (nativeEvent, callback) => {
    const { longitude, latitude } = nativeEvent;
    //android bug
    this.setState({
      myPosition:{
        latitude: latitude,
        longitude: longitude
      }
    })
    return this.myPosition = {
      latitude: latitude,
      longitude: longitude
    }
  }

  /**
  * 地图点击去掉路径规划,更新state
  * */
  componentWillReceiveProps(nextProps){
    this.setState({
      ifShowCenter: nextProps.ifShowCenter,
      bikeMarkerData: nextProps.bikeMarkerData,
      parkMarkerData: nextProps.parkMarkerData,
      parkAreaData: nextProps.parkAreaData,
    })
  }

  //返回用户当前坐标
  getUserLocation = () => {return this.myPosition}
  //返回当前中心位置坐标
  getCenterLocation = () => {return this.centerPosition};
  //地图点击事件回调
  mapOnPress = (nativeEvent) => {
    console.log(nativeEvent)
    this.props.mapOnPress && this.props.mapOnPress(nativeEvent ,'map');
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
  * 渲染地图组件
  * */
  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => this.mapView = ref}
          locationEnabled
          locationInterval={500}
          onPress={this.PressEvent}
          onLongPress={this.LongPressEvent}
          onLocation={this.LocationEvent}
          onStatusChange={this.StatusChangeEvent}
          onStatusChangeComplete={this.StatusChangeCompleteEvent}
          zoomLevel={this.state.zoomLevel}
          coordinate={this.props.myPosition}
          onSearchRouteComplete={this.props.onSearchRouteComplete}
          style={{
            flex: 1,
            height,
            width,
            borderWidth: 1,
            borderColor: 'white',
          }}
        >
          {this.renderBikeMaker()}
          {this.renderParkerMaker()}
          {this.renderParkerArea()}
          {this.renderCenterIconWhenRoute()}
        </MapView>
        {this.state.ifShowCenter ? (
          <View style={styles.centerIconView}>
            <Image
              source={require('./assets/index.png')}
            />
          </View>
        ) : null }
      </View>
    );
  }
}


