/**
* amap3d 接口类
* create by shijie
* */

export default class Amap3dInterface {

  constructor(mapViewProps) {
    // super(props);
    console.log(mapViewProps)
    this.mapViewProps = mapViewProps;
  }

  // 返回当前中心点坐标
  getCenterLocation (){
    const Pointer = this.mapViewProps.getCenterLocation();
    return Pointer;
  }

  // 回到定位位置
  restartLocation(myPosition) {
    const Pointer = this.mapViewProps.getUserLocation();
    this.mapViewProps.mapView.animateTo({
      zoomLevel: 18,
      coordinate: {
        latitude: Pointer.latitude,
        longitude: Pointer.longitude,
      }
    })
  }

  // searchPOI 搜索接口
  searchPOI(city,Point) {

  }
  // 规划路线接口
  searchRoute(startPoint, endPoint) {
    this.mapViewProps.mapView.searchRoute(startPoint, endPoint);
  }

  // 清除规划路线
  clearRoute(){
    this.mapViewProps.mapView.clearRoute();
  }
}