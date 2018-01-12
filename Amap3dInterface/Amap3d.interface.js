/**
 * amap3d 接口类
 * create by shijie
 * */

function Amap3dInterface(mapViewProps){

  this.mapViewProps = mapViewProps;

  /**
   * 取得当前中心点坐标
   * */
  this.getCenterLocation = () => {
    const Pointer = this.mapViewProps.getCenterLocation();
    return Pointer;
  };

  /**
   * 回到定位位置
   * */
  this.restartLocation = (myPosition) => {
    const Pointer = this.mapViewProps.getUserLocation();
    this.mapViewProps.mapView.animateTo({
      zoomLevel: 18,
      coordinate: {
        latitude: Pointer.latitude,
        longitude: Pointer.longitude,
      }
    })
  };

  /**
   * searchPOI 搜索接口
   * */
  this.searchPOI = (city,Point) => {
    this.mapViewProps.mapView.searchPOI(mapViewProps);
  };

  /**
   * 规划路线接口
   * */
  this.searchRoute = (startPoint, endPoint) => {
    this.mapViewProps.mapView.searchRoute(startPoint, endPoint);
  };

  /**
   * 清除路线接口
   * */
  this.clearRoute = () => {
    this.mapViewProps.mapView.clearRoute();
  };


  /**
   * 动画过渡函数
   * @param object
   * 地图常见属性，如zoomLevel，coordinate等
   * {
      zoomLevel: 18,
      coordinate: {
        latitude: Pointer.latitude,
        longitude: Pointer.longitude,
      }
    }
   * */

  this.mapAnimate = (param) => {
    this.mapViewProps.mapView.animateTo({
      ...param
    })
  }


}

export default Amap3dInterface;