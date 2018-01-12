/**
* amap3d 接口类
* create by shijie
* */

function Amap3dInterface(mapViewProps){

  this.mapView = mapViewProps;

  // 取得当前中心点坐标
  // this.getCenterLocation = () => {
  //   const Pointer = this.mapView.getCenterLocation();
  //   return Pointer;
  // }

  // 回到定位位置
  // restartLocation:(mapViewProps,myPosition) => {
  //   const Pointer = mapViewProps.getUserLocation();
  //   this.mapViewProps.mapView.animateTo({
  //     zoomLevel: 18,
  //     coordinate: {
  //       latitude: Pointer.latitude,
  //       longitude: Pointer.longitude,
  //     }
  //   })
  // }
  //
  // // searchPOI 搜索接口
  // searchPOI:(mapViewProps,city,Point) => {
  //   this.mapViewProps.mapView.searchPOI(mapViewProps);
  // }
  //
  // // 规划路线接口
  // searchRoute:(mapViewProps,startPoint, endPoint) => {
  //   this.mapViewProps.mapView.searchRoute(startPoint, endPoint);
  // }
  //
  // // 清除规划路线
  // clearRoute:(mapViewProps) => {
  //   this.mapViewProps.mapView.clearRoute();
  // }
}

export default Amap3dInterface;