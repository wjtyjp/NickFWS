import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定项目审核
// 保存
export function saveSpecialItemHear(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentHearing.saveSpecialItemHear,
    method: 'post',
    data: params
  })
}

// 提交
export function submitSpecialItemHear(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentHearing.submitSpecialItemHear,
    method: 'post',
    data: params
  })
}

// 获取价格听证信息（页面初始化）
export function getSpecialItemHear(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentHearing.getSpecialItemHear,
    method: 'post',
    data: params
  })
}

export default{
  saveSpecialItemHear,
  submitSpecialItemHear,
  getSpecialItemHear
}
