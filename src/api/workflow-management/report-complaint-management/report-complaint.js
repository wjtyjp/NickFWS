import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 举报投诉（投诉、受理、处理、回访）
export function pricRptCmpaTs(params) {
  return request({
    url: APIUrl.reportComplaintManagement.pricRptCmpaTs,
    method: 'post',
    data: params
  })
}

// 获取处理编号
export function pricRptCmpaDspoId(params) {
  return request({
    url: APIUrl.reportComplaintManagement.pricRptCmpaDspoId,
    method: 'post',
    data: params
  })
}

// 获取待办列表
export function queryPricRptCmpas(params) {
  return request({
    url: APIUrl.reportComplaintManagement.queryPricRptCmpas,
    method: 'post',
    data: params
  })
}

// 获获取投诉信息
export function queryPricRptCmpaByTaskId(params) {
  return request({
    url: APIUrl.reportComplaintManagement.queryPricRptCmpaByTaskId,
    method: 'post',
    data: params
  })
}
// 获获取投诉编号
export function pricRptCmpaTsId(params) {
  return request({
    url: APIUrl.reportComplaintManagement.pricRptCmpaTsId,
    method: 'post',
    data: params
  })
}
export default{
  pricRptCmpaDspoId,
  queryPricRptCmpas,
  queryPricRptCmpaByTaskId, pricRptCmpaTsId, pricRptCmpaTs
}
