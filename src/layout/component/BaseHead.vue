<template>
  <div class="head-box">
    {{ projectTit }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectTit: '定海水利工程巡查'
    }
  }
}
</script>

<style lang="less" scoped>
.head-box {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1699px;
  height: 108px;
  background-image: url('~@/assets/imgs/layout/head.png');
  background-size: 100% 100%;
  text-align: center;
  line-height: 90px;
  font-family: PangMenZhengDao-3;
  font-size: 40px;
  color: #ffffff;
}
</style>
