import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 查询
export function queryItemForPricSet(params) {
  return request({
    url: APIUrl.pricingTaskApplication.queryItemForPricSet,
    method: 'post',
    data: params
  })
}
// 提交
export function savePriceSetStartInfo(params) {
  return request({
    url: APIUrl.pricingTaskApplication.savePriceSetStartInfo,
    method: 'post',
    data: params
  })
}
export default{
  queryItemForPricSet, savePriceSetStartInfo
}
