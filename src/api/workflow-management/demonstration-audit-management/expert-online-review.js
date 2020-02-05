import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// 【接收/拒绝】保存专家接收意见
export function saveExpertAcceptAdvice(params) {
  return request({
    url: APIUrl.expertOnlineReview.saveExpertAcceptAdvice,
    method: 'post',
    data: params
  })
}
// 【点击专家评审加载任务附件清单】获取任务附件清单
export function listTaskAccessories(params) {
  return request({
    url: APIUrl.expertOnlineReview.listTaskAccessories,
    method: 'post',
    data: params
  })
}
// 【【点击接收/专家评审加载详情】获取专家评审任务详情
export function getExpertTask(params) {
  return request({
    url: APIUrl.expertOnlineReview.getExpertTask,
    method: 'post',
    data: params
  })
}
// 新接收【【点击接收/专家评审加载详情】获取专家评审任务详情
export function getDemonstrationStartContent(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.getDemonstrationStartContent,
    method: 'post',
    data: params
  })
}
// 【评审通过/评审不通过】保存专家评审信息
export function saveExpertAssess(params) {
  return request({
    url: APIUrl.expertOnlineReview.saveExpertAssess,
    method: 'post',
    data: params
  })
}
// 【页面加载显示专家评审信息】查询专家评审任务信息
export function queryExpertTasks(params) {
  return request({
    url: APIUrl.expertOnlineReview.queryExpertTasks,
    method: 'post',
    data: params
  })
}
// 【页面加载显示专家评审信息】查询专家评审任务信息
export function queryExpertAssessInfos(params) {
  return request({
    url: APIUrl.expertOnlineReview.queryExpertAssessInfos,
    method: 'post',
    data: params
  })
}
export default{
  queryExpertTasks, saveExpertAssess, listTaskAccessories, getExpertTask,
  saveExpertAcceptAdvice, queryExpertAssessInfos, getDemonstrationStartContent
}
