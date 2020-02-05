import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 审核不通过
export function saveCheckFail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentAcceptance.saveCheckFail,
    method: 'post',
    data: params
  })
}
// 审核通过
export function saveCheckPass(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentAcceptance.saveCheckPass,
    method: 'post',
    data: params
  })
}
// 查询
export function listTask(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentAcceptance.listTask,
    method: 'post',
    data: params
  })
}
// 详情
export function getTaskDetail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentAcceptance.getTaskDetail,
    method: 'post',
    data: params
  })
}
// 查询医疗机构
export function listMedInsByPoolArea(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentAcceptance.listMedInsByPoolArea,
    method: 'post',
    data: params
  })
}

export default{
  saveCheckFail, saveCheckPass, listTask, getTaskDetail, listMedInsByPoolArea
}
