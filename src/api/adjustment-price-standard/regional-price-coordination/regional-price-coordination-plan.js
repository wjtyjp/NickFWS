import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 获取工作流中某一环节的任务信息列表
export function queryTaskForAreaPrice(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationPlan.queryTaskForAreaPrice,
    method: 'post',
    data: params
  })
}
// 获取区域价格协调方案环节的任务详情
export function queryAreaPriceInfo(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationPlan.queryAreaPriceInfo,
    method: 'post',
    data: params
  })
}
// 提交区域价格协调调价信息
export function saveNewPriceInfo(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationPlan.saveNewPriceInfo,
    method: 'post',
    data: params
  })
}
// 提交区域价格协调方案信息
export function saveSchemeInfo(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationPlan.saveSchemeInfo,
    method: 'post',
    data: params
  })
}
export default{
  queryTaskForAreaPrice, saveSchemeInfo, saveNewPriceInfo, queryAreaPriceInfo
}
