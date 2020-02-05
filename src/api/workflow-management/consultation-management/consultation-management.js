import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// // 【页面加载】获取需要发起意见征求的任务信息
export function querySeekOpinionTaskList(params) {
  return request({
    url: APIUrl.consultationManagement.querySeekOpinionTaskList,
    method: 'post',
    data: params
  })
}
// 【选择一个任务信息点击发起意见征求】获取意见征求详细信息
export function getSeekOpinionInfo(params) {
  return request({
    url: APIUrl.consultationManagement.getSeekOpinionInfo,
    method: 'post',
    data: params
  })
}
// 【点击保存】保存意见征求信息
export function saveSeekOpinionInfo(params) {
  return request({
    url: APIUrl.consultationManagement.saveSeekOpinionInfo,
    method: 'post',
    data: params
  })
}
// 【【点击发布】发布意见征求
export function startSeekOpinion(params) {
  return request({
    url: APIUrl.consultationManagement.startSeekOpinion,
    method: 'post',
    data: params
  })
}
// 【保存意见征求建议信息】保存意见征求建议信息
export function saveAdviseInfo(params) {
  return request({
    url: APIUrl.consultationManagement.saveAdviseInfo,
    method: 'post',
    data: params
  })
}
// 【双击建议列表中回复信息】获取意见征求建议详细信息
export function getDviseInfo(params) {
  return request({
    url: APIUrl.consultationManagement.getDviseInfo,
    method: 'post',
    data: params
  })
}
//  【点击保存】保存回复信息
export function saveReplyInfo(params) {
  return request({
    url: APIUrl.consultationManagement.saveReplyInfo,
    method: 'post',
    data: params
  })
}
// 【点击回复链接】查询回复信息列表
export function queryaDviseInfos(params) {
  return request({
    url: APIUrl.consultationManagement.queryaDviseInfos,
    method: 'post',
    data: params
  })
}
//  【点击提交】提交回复信息
export function submitReplyInfo(params) {
  return request({
    url: APIUrl.consultationManagement.submitReplyInfo,
    method: 'post',
    data: params
  })
}
// 【点击通过/不通过】保存意见征求建议汇总信息
export function saveOpinionSummaryInfo(params) {
  return request({
    url: APIUrl.consultationManagement.saveOpinionSummaryInfo,
    method: 'post',
    data: params
  })
}
// 【】保存意见征求建议汇总信息
export function querySeekOpinionAdviseTaskList(params) {
  return request({
    url: APIUrl.consultationManagement.querySeekOpinionAdviseTaskList,
    method: 'post',
    data: params
  })
}

export default{
  saveOpinionSummaryInfo, submitReplyInfo, queryaDviseInfos, saveReplyInfo,
  getDviseInfo, saveAdviseInfo, startSeekOpinion, saveSeekOpinionInfo, getSeekOpinionInfo, querySeekOpinionTaskList, querySeekOpinionAdviseTaskList
}
