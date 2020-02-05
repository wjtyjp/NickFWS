import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 获取发布信息列表
export function listIssueTask(params) {
  return request({
    url: APIUrl.issueManagements.listIssueTask,
    method: 'post',
    data: params
  })
}

// 获取发布信息
export function getIssueTask(params) {
  return request({
    url: APIUrl.issueManagements.getIssueTask,
    method: 'post',
    data: params
  })
}

// 保存发布信息
export function saveIssueTask(params) {
  return request({
    url: APIUrl.issueManagements.saveIssueTask,
    method: 'post',
    data: params
  })
}

// 发布
export function sumbitIssueTask(params) {
  return request({
    url: APIUrl.issueManagements.sumbitIssueTask,
    method: 'post',
    data: params
  })
}

export default{
  listIssueTask,
  getIssueTask,
  saveIssueTask,
  sumbitIssueTask
}
