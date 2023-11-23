const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    proxy: {
      '/drsp-auth': {
        // 统一登录
        target: 'http://192.168.2.172:4888',
        changeOrigin: true,
        ws: true
        // pathRewrite: { '^/drsp-auth': '' }
      }
    }
  }
})
