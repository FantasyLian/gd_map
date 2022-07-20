<template>
  <a-layout>
    <a-layout-header>
      <header-bar />
    </a-layout-header>
    <a-layout-content>

    </a-layout-content>
    <a-layout-footer>技術支持：貴州飛渲科技有限公司</a-layout-footer>
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
    ALayoutFooter: Layout.Footer,
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
  }
}
</style>
