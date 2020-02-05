import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定项目价格调整启动
// 保存
export function saveSpecialItemStart(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentStart.saveSpecialItemStart,
    method: 'post',
    data: params
  })
}

// 提交
export function submitSpecialItemStart(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentStart.submitSpecialItemStart,
    method: 'post',
    data: params
  })
}

// 获取特定项目启动详情（新增按钮）
export function getSpecialItemStart(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentStart.getSpecialItemStart,
    method: 'post',
    data: params
  })
}

export default{
  saveSpecialItemStart,
  submitSpecialItemStart,
  getSpecialItemStart
}
