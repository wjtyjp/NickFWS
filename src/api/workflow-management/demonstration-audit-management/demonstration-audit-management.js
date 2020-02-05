import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// 【主页面加载/查询按钮】获取发起评审任务信息列表
export function queryDemonstrationStartTaskList(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.queryDemonstrationStartTaskList,
    method: 'post',
    data: params
  })
}
// 【点击发起评审按钮】保存发起评审信息并发起评审
export function saveDemonstrationStartContent(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.saveDemonstrationStartContent,
    method: 'post',
    data: params
  })
}
// 【点击发起评审链接】获取评审任务详细信息
export function getDemonstrationStartContent(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.getDemonstrationStartContent,
    method: 'post',
    data: params
  })
}
// 【点击随机选择专家按钮】获取评审专家信息通过公共接口
export function listExpertByPublicService(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.listExpertByPublicService,
    method: 'post',
    data: params
  })
}
// 【点击评审复核】获取专家评审信息
export function queryExpertAssessInfos(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.queryExpertAssessInfos,
    method: 'post',
    data: params
  })
}
// 【审核通过/审核不通过】保存评审复核信息
export function saveDemonstrationCheckContent(params) {
  return request({
    url: APIUrl.demonstrationAuditManagement.saveDemonstrationCheckContent,
    method: 'post',
    data: params
  })
}
export default{
  listExpertByPublicService, getDemonstrationStartContent, saveDemonstrationStartContent, queryDemonstrationStartTaskList,
  queryExpertAssessInfos, saveDemonstrationCheckContent
}
