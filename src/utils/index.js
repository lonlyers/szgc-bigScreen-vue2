// 保留小数
export function toDecimal(num, value = 2) {
  var result = parseFloat(num)
  if (isNaN(result)) {
    return false
  }
  result = Math.round(num * 100) / 100
  var s_x = result.toString()
  var pos_decimal = s_x.indexOf('.')
  if (pos_decimal < 0) {
    pos_decimal = s_x.length
    s_x += '.'
  }
  while (s_x.length <= pos_decimal + value) {
    s_x += '0'
  }
  return s_x
}
