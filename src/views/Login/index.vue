<template>
  <div>loading</div>
</template>

<script>
import singleSign from '@/auth/singleSign'
export default {
  data() {
    return {}
  },
  created() {
    singleSign(15036373894).then(val => {
      if (val) {
        this.$router.push('/screen')
        this.$message.success('登录成功')
        console.log(this.$router)
      }
    })
  }
}
</script>

<style lang="less" scoped></style>
