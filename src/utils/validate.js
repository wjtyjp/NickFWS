/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
//  校验是否为十六位长度数值
export function validateNumber16(str) {
  return /^[0-9]{1,16}$/.test(str)
}
// 十二位长度数值小数点后面四位
export function validateNumberOrDecimal(str) {
  return /(^[0-9]{1,12}$)|(^[0-9]{1,12}[\.]{1}[0-9]{1,4}$)/.test(str)
}
// 十四位长度数值小数点后面两位
export function validateNumberOrDecimalTwo(str) {
  return /(^[0-9]{1,14}$)|(^[0-9]{1,14}[\.]{1}[0-9]{1,4}$)/.test(str)
}
// 0和正整数
export function validateIntegerNumber(str) {
  return /^(0|\+?[1-9][0-9]*)$/.test(str)
}
// 数值小数点后面2位
export function validateNumberOrDecimal2(str) {
  return /^\d\.?(\d{1,2})?$/.test(str)
}
// 大于0小于等于1的4位小数
export function validateFloatZeroToOne(str) {
  return /^0\.?(\d{1,4})?$/.test(str)
}
// 校验9位的数字或者字母
export function validateNumStr9(str) {
  return /^[a-zA-Z0-9]{9}$/.test(str)
}
// 校验2位的数字或者字母
export function validateNumStr2(str) {
  return /^[a-zA-Z0-9]{2}$/.test(str)
}
// 校验2为数字，四位小数
export function validateNumberOrDecimalThree(str) {
  return /(^[0-9]{1,2}$)|(^[0-9]{1,2}[\.]{1}[0-9]{1,4}$)/.test(str)
}
// 校验6位数字
export function validateNumber6(str) {
  return /^[0-9]{1,6}$/.test(str)
}
