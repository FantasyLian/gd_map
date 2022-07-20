<template>
  <a-layout>
    <a-layout-header>
      <header-bar />
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script>
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import HeaderBar from '@/components/HeaderBar.vue'

export default defineComponent({
  components: {
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    HeaderBar
  },
  setup () {

  }
})
</script>
<style lang="less">
.ant-layout {
  height: 100vh;

  .ant-layout-header {
    width: 100%;
    height: 64px;
    padding: 0 25px;
    background: linear-gradient(90deg, #0054d4 0%, #1996ff 100%);
    display: flex;
    justify-content: space-between;
  }
  .ant-layout-footer {
    padding: 0 25px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: transparent;
  }
}
</style>
