import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/quit-medical-service-price'
// [详情]按钮任务详情(包含项目)
export function getTask(params) {
  return request({
    url: APIUrl.priceItemsExitExamine.getTask,
    method: 'post',
    data: params
  })
}
//  审核不通过
export function itemOutAuditFaile(params) {
  return request({
    url: APIUrl.priceItemsExitExamine.itemOutAuditFaile,
    method: 'post',
    data: params
  })
}
//   审核通过
export function updateAuditPass(params) {
  return request({
    url: APIUrl.priceItemsExitExamine.updateAuditPass,
    method: 'post',
    data: params
  })
}
//   查询任务列表
export function listTask(params) {
  return request({
    url: APIUrl.priceItemsExitExamine.listTask,
    method: 'post',
    data: params
  })
}
export default{
  itemOutAuditFaile, updateAuditPass, listTask, getTask
}
