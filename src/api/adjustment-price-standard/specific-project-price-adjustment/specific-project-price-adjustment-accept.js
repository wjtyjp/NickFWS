import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定项目审核
// 审核不通过
export function saveSpecialItemCheckFail(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentAccept.saveSpecialItemCheckFail,
    method: 'post',
    data: params
  })
}

// 审核通过
export function saveSpecialItemCheckPass(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentAccept.saveSpecialItemCheckPass,
    method: 'post',
    data: params
  })
}

// 获取详情页面初始化
export function getSpecialItemTaskDetail(params) {
  return request({
    url: APIUrl.specificProjectPriceAdjustmentAccept.getSpecialItemTaskDetail,
    method: 'post',
    data: params
  })
}

export default{
  saveSpecialItemCheckFail,
  saveSpecialItemCheckPass,
  getSpecialItemTaskDetail
}
