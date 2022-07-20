<template>
  <div class="logo">
    <img src="../assets/images/icon_police_badge.png" alt="logo" />
    <h1>罗甸县公安局警力分布系统</h1>
  </div>
  <div class="user-wrap">
    <user-outlined class="user" />
    <strong>張警官</strong>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    UserOutlined
  },
  setup () {

  }
})
</script>
<style scoped lang="less">
.logo {
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  h1 {
    font-size: 16px;
    font-weight: 500;
    color: #fefeff;
  }
}
.user-wrap {
  display: flex;
  align-items: center;
  .user {
    color: #fff;
    width: 24px;
    height: 24px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  strong {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-left: 8px;
  }
}
</style>
