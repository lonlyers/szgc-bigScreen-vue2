<template>
  <div class="layout-container">
    <BaseHead/>
    <BaseFooter/>
    <img
      class="left-zs"
      src="~@/assets/imgs/layout/zs-left-top.png"
    />
    <img
      class="right-zs"
      src="~@/assets/imgs/layout/zs-right-top.png"
    />
    <router-view />
  </div>
</template>

<script>
import BaseHead from './component/BaseHead.vue'
import BaseFooter from './component/BaseFooter'

export default {
  components: { BaseHead, BaseFooter }
}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/imgs/layout/mask.png');
  background-size: 100% 100%;
  position: relative;
  .right-zs{
    position: absolute;
    top: 14px;
    right: 17px;
  }
  .left-zs{
    position: absolute;
    top: 14px;
    left: 17px;
  }
  // background-color: #000;
}
</style>
