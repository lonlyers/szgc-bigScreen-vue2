<template>
  <div class="dh-card">
    <div class="dh-card-header">
      <!-- 标题 -->
      <div class="header-title">
        {{ title }}
      </div>
      <div class="header-right">
        <!-- 右侧操作 -->
        <slot name="header-right"></slot>
        <div
          class="show-more"
          v-if="showMore"
          @click="$emit('showMore')"
        >
          <span class="text">更多</span>
          <img src="~@/assets/imgs/other/more.png" />
        </div>
      </div>
    </div>
    <!-- 卡片内容 -->
    <div class="dh-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhCard',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    showMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.dh-card {
  width: 100%;
  height: 100%;

  .dh-card-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .show-more {
    cursor: pointer;
    .text {
      font-family: PangMenZhengDao-3;
      text-decoration: underline;
      color: #33b3fd;
    }
  }
  .dh-card-body {
    height: calc(100% - 30px);
    overflow: auto;
    background-color: #fff;
  }
  .header-title {
    width: 201px;
    height: 100%;
    background-image: url(~@/assets/imgs/other/card-tit-bg.png);
    background-size: 100% 100%;
    font-family: PangMenZhengDao-3;
    font-size: 20px;
    color: #ffffff;
    padding-left: 36px;
  }
}
</style>
