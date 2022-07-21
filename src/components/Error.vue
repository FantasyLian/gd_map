<template>
  <div class="error">Sorry, {{ msg }} :)</div>
</template>

<script>
export default {
  name: 'ErrorInfo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.error {
  font-size: 26px;
  letter-spacing: 5px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
