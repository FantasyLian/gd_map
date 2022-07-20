<template>
  <div class="about">
    <a-button type="primary" ghost>按鈕</a-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
export default defineComponent({
  components: {
    AButton: Button
  },
  setup () {

  }
})
</script>
