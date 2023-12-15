import { toDecimal } from './index'
const baseSize = 16 //跟postcss.config.js中rootValue的值是一致的
// 设置 rem 函数

const baseHeight = 1080
const baseWidth = 1920
function setRem() {
  const heightScale = baseHeight / document.documentElement.clientHeight
  // 当前页面宽度相对于  1920 宽的缩放比例，可根据自己需要修改。  vantUI使用的是 1920px页面宽，这里使用 1920px
  const scale = document.documentElement.clientWidth / (baseWidth * heightScale)
  // 设置页面根节点字体大小 最高为两倍图 即设计稿为750
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}

// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

export const setRemUnit = val => {
  return toDecimal(val / baseSize) + 'rem'
}
console.log(setRemUnit(20))
