import { map } from 'lodash';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Mask,
  Amap3d,
  Amap3dInterface,
} from 'matrix-basic-components';
import React, { Component } from 'react';
import {
  bikeMarker,
  parking,
  location
} from '../assets/index';

const { width, height } = Dimensions.get('window');

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.Amap3dInterface = {};
    this.state = {
      parkAreaData: [
        [
          {
            latitude: 22.545949,
            longitude: 113.954388,
          },
          {
            latitude: 22.546424,
            longitude: 113.948981,
          },
          {
            latitude: 22.541321,
            longitude: 113.952146,
          }
        ],
        [
          {
            latitude: 22.543299,
            longitude: 113.959957,
          },
          {
            latitude: 22.543978,
            longitude: 113.961851,
          },
          {
            latitude: 22.54378,
            longitude: 113.965064,
          }
        ],
      ],
      bikeMarkers: [
        {
          latitude: 22.5435063275,
          longitude: 113.9582633972,
        },
        {
          latitude: 22.5430207841,
          longitude: 113.9572441578,
        },
        {
          latitude: 22.5426244208,
          longitude: 113.9577162266,
        },
      ],
      parkingMarkers: [
        {
          latitude: 22.5442296849,
          longitude: 113.9553880692,
        },
      ],
      myPosition: {
        latitude: 22.5435063275,
        longitude: 113.9582633972,
      },
      ifShowCenter: true,
    };
  }

  /**
   * 复位按钮
   * */
  renderTools() {
    return (
      <View >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            bottom: 20,
            left: - width/2 + 20,
          }}
          onPress={()=> {
            this.Amap3dInterface.restartLocation()
          }}
        >
          <Image
            source={require('../assets/home_icon_position.png')}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * 路径规划
   * */
  searchRoute(centerLocation, Point) {
    this.setState({
      ifShowCenter: false
    })
    this.Amap3dInterface.searchRoute(
      centerLocation,
      Point,
      () => {
        console.log('searchRoute success')
      }
    )
  }

  /**
   车辆图标点击回调
   */
  bikeMarkerOnPress = (Point, index) => {
    const centerLocation = this.Amap3dInterface.getCenterLocation();
    this.searchRoute(centerLocation, Point);
  }

  /**
   地图点击回调
  */
  mapOnPress = (nativeEvent) => {

    //ios bug fix
    if(nativeEvent.hasOwnProperty('latitude') && nativeEvent.hasOwnProperty('longitude')){
      // 取消路径规划
      this.Amap3dInterface.clearRoute(this.mapView);
      this.setState({
        ifShowCenter: true,
        zoomLevel: 18
      })
    }
  }


  /**
   * 如要使用API，比如初始化进行声明
   * */
  componentDidMount() {
    this.Amap3dInterface = new Amap3dInterface(this.mapView);
  }

  render() {
    return (
      <View style={styles.container}>
        <Amap3d
          ref={ref => {
            this.mapView = ref;
          }}
          bikeMarkerData={this.state.bikeMarkers}
          bikeMarkerImg={bikeMarker}
          bikeMarkerStyle={{
            height: 40,
            width: 40,
            resizeMode: Image.resizeMode.cover,
          }}
          bikeMarkerOnPress={this.bikeMarkerOnPress}
          parkMarkerData={this.state.parkingMarkers}
          parkMarkerImg={parking}
          parkMarkerStyle={{
            height: 40,
            width: 40,
            resizeMode: Image.resizeMode.contain,
          }}
          parkMarkerOnPress={this.parkMarkerOnPress}
          parkAreaData={this.state.parkAreaData}
          myPosition={this.state.myPosition}
          zoomLevel={this.state.zoomLevel}
          ifShowCenter={this.state.ifShowCenter}
          mapOnPress={this.mapOnPress}
        >
        </Amap3d>
        {this.renderTools()}
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
