<template>
  <div class="footer-box"></div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 38px;
  background-image: url('~@/assets/imgs/layout/bottom.png');
  background-size: 100% 100%;
  text-align: center;
  line-height: 90px;
  font-family: PangMenZhengDao-3;
  font-size: 40px;
  color: #ffffff;
}
</style>
