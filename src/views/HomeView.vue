<template>
  <div id="container"></div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { shallowRef } from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader'
export default defineComponent({
  setup () {
    const { proxy } = getCurrentInstance()
    const map = shallowRef(null)
    const state = reactive({
      lat: 106.74559,
      lng: 25.431777
    })

    onMounted(() => {
      initMap()
    })

    const initMap = () => {
      AMapLoader.load({
        key: '786b2971239724c0f93431458965021c',
        version: '2.0',
        plugins: ['AMap.Geolocation']
      }).then(AMap => {
        proxy.map = new AMap.Map('container', {
          viewMode: '3D',
          zoom: 18,
          center: [state.lat, state.lng]
        })

        const cop = new AMap.Icon({
          size: new AMap.Size(60, 60), // 图标尺寸
          image: require('../assets/images/way_btn.jpg'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(60, 60) // 根据所设置的大小拉伸或压缩图片
        })

        const marker = new AMap.Marker({
          position: new AMap.LngLat(state.lat, state.lng),
          offset: new AMap.Pixel(-10, -10),
          icon: cop, // 添加 Icon 实例
          zoom: 18
        })

        proxy.map.add(marker)
        proxy.map.on('click', clickHandler)

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
            console.error(data)
          }
        })
      }).catch(error => {
        console.error(error)
      })
    }

    const clickHandler = e => {
      console.log('您在[ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ]的位置点击了地图！')
    }

    return {
      map,
      ...toRefs(state),
      initMap,
      clickHandler
    }
  }
})
</script>

<style scoped lang="less">
#container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
