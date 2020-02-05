import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 【保存】保存工作动态日志信息
export function saveDynamicLog(params) {
  return request({
    url: APIUrl.workDynamicLog.saveDynamicLog,
    method: 'post',
    data: params
  })
}

// 【删除】删除工作动态日志信息
export function deleteDynamicLog(params) {
  return request({
    url: APIUrl.workDynamicLog.deleteDynamicLog,
    method: 'post',
    data: params
  })
}
// 【查询】获取工作动态日志列表
export function listDynamicLog(params) {
  return request({
    url: APIUrl.workDynamicLog.listDynamicLog,
    method: 'post',
    data: params
  })
}
// 【查询】获取工作动态日志详细信息
export function getDynamicLog(params) {
  return request({
    url: APIUrl.workDynamicLog.getDynamicLog,
    method: 'post',
    data: params
  })
}
export default{
  saveDynamicLog,
  deleteDynamicLog,
  listDynamicLog,
  getDynamicLog
}
