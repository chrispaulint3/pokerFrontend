<script>
let map
let marker
export default {
  props:
  {
    longitude: {
      type: Number,
      default: 116.404
    },
    latitude: {
      type: Number,
      default: 39.915
    }
  },
  mounted() {
    map = new BMapGL.Map("map")
    var point = new BMapGL.Point(this.longitude, this.latitude)
    map.centerAndZoom(point, 15)
    marker = new BMapGL.Marker(point)
    map.addOverlay(marker)
    map.enableScrollWheelZoom()
  },
  updated() {
    map.removeOverlay(marker)
    var point = new BMapGL.Point(this.longitude, this.latitude)
    map.centerAndZoom(point, 15)
    marker.setPosition(point)
    map.addOverlay(marker)
    map.enableScrollWheelZoom()
  },
}

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">位置辅助</h5>
      <p class="card-text">红色标记为房源经纬度位置</p>
    </div>
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  width: 100% !important;
  height: 40vh !important;
  margin: 20px auto;
  overflow: hidden;

}
</style>