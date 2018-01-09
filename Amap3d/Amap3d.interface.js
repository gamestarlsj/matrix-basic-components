/**
* amap3d 接口类
* create by shijie
* */

import { LocationManager } from '../../matrix-bridges'

export default class Amap3dInterface {

  constructor(mapView) {
    // super(props);
    console.log(mapView)
    this.mapView = mapView;
  }

  // 回到定位位置
  restartLocation(myPosition) {
    this.mapView.animateTo({
      coordinate: {
        latitude: myPosition.latitude,
        longitude: myPosition.longitude,
      }
    })
  }

  // 路径规划
  searchRoute(start, end){
    
  }

}