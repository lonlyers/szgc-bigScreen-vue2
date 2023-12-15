<template>
  <div class="index-container">
    <div class="left">
      <gcgk />
      <xctj />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import gcgk from './left/gcgk'
import xctj from './left/xctj'
export default {
  components: { gcgk, xctj }
}
</script>

<style lang="less" scoped>
.index-container {
  position: relative;
  .left {
    position: absolute;
    left: 15px;
    top: 80px;
    width: 381px;
  }
  .right {
    position: absolute;
    right: 15px;
    top: 80px;
    width: 381px;
  }
}
</style>
