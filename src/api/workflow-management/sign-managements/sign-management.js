import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 获取签批信息列表
export function listSignTask(params) {
  return request({
    url: APIUrl.signManagements.listSignTask,
    method: 'post',
    data: params
  })
}

// 获取签批信息
export function getSignTask(params) {
  return request({
    url: APIUrl.signManagements.getSignTask,
    method: 'post',
    data: params
  })
}

// 保存签批信息
export function saveSignInfo(params) {
  return request({
    url: APIUrl.signManagements.saveSignInfo,
    method: 'post',
    data: params
  })
}

// 签批
export function sumbitSignTask(params) {
  return request({
    url: APIUrl.signManagements.sumbitSignTask,
    method: 'post',
    data: params
  })
}
// 批量签批
export function sumbitSignTasks(params) {
  return request({
    url: APIUrl.signManagements.sumbitSignTasks,
    method: 'post',
    data: params
  })
}
// 驳回
export function backTaskFlow(params) {
  return request({
    url: APIUrl.signManagements.backTaskFlow,
    method: 'post',
    data: params
  })
}

export function bhSignTask(params) {
  return request({
    url: APIUrl.signManagements.bhSignTask,
    method: 'post',
    data: params
  })
}

export default{
  listSignTask,
  getSignTask,
  saveSignInfo,
  sumbitSignTask,
  backTaskFlow,
  sumbitSignTasks,
  bhSignTask
}
