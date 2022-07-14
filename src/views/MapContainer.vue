<template>
  <section id="container"></section>
</template>
<script>
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import { shallowRef } from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader'
export default defineComponent({
  setup () {
    const { proxy } = getCurrentInstance()
    const map = shallowRef(null)

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
          zoom: 18 // 初始化地图级别
          // center: [105.602725, 37.076636] // 初始化地图中心点位置
        })
        const satellite = new AMap.TileLayer.Satellite({ zIndex: 10 })
        proxy.map.add(satellite)
      }).catch(e => {
        console.log(e)
      })
    }

    return {
      map,
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
