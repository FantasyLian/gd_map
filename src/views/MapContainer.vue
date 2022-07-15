<template>
  <section id="container"></section>
</template>
<script>
import { defineComponent, getCurrentInstance, onMounted, toRefs } from 'vue'
import { shallowRef } from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader'
export default defineComponent({
  setup () {
    const { proxy } = getCurrentInstance()
    const map = shallowRef(null)

    const state = {
      lat: 106.74559,
      lng: 25.431777
    }

    // DOM初始化完成进行地图初始化
    onMounted(() => {
      initMap()
    })

    const initMap = () => {
      AMapLoader.load({
        key: '786b2971239724c0f93431458965021c', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then(AMap => {
        proxy.map = new AMap.Map('container', { // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 18, // 初始化地图级别
          center: [state.lat, state.lng] // 初始化地图中心点位置
        })

        const cop = new AMap.Icon({
          size: new AMap.Size(30, 30), // 图标尺寸
          image: require('../assets/images/way_btn.jpg'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(30, 30) // 根据所设置的大小拉伸或压缩图片
        })

        const marker = new AMap.Marker({
          position: new AMap.LngLat(state.lat, state.lng),
          offset: new AMap.Pixel(-10, -10),
          icon: cop, // 添加 Icon 实例
          zoom: 18
        })

        proxy.map.add(marker)

        proxy.map.plugin('AMap.Geolocation', () => {
          const geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量
            offset: [20, 20],
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            position: 'RB'
          })

          proxy.map.addControl(geolocation)

          geolocation.getCurrentPosition((status, result) => {
            if (status === 'complete') {
              onComplete(result)
            } else {
              onError(result)
            }
          })

          function onComplete (data) {
            console.log(data)
          }

          function onError (data) {
            // 定位出错
            console.log(data)
          }
        })
      }).catch(e => {
        console.log(e)
      })
    }

    return {
      map,
      ...toRefs(state),
      initMap
    }
  }
})
</script>

<style lang="less" scoped>
#container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
