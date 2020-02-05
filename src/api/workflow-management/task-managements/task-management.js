import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 查询流程信息列表
export function listTaskByPage(params) {
  return request({
    url: APIUrl.taskManagements.listTaskByPage,
    method: 'post',
    data: params
  })
}

// 回退流程
export function backTaskFlow(params) {
  return request({
    url: APIUrl.taskManagements.backTaskFlow,
    method: 'post',
    data: params
  })
}

// 终止流程
export function endTaskFlow(params) {
  return request({
    url: APIUrl.taskManagements.endTaskFlow,
    method: 'post',
    data: params
  })
}
// 查询流程信息列表
export function listToDoTask(params) {
  return request({
    url: APIUrl.taskTodoManagements.listToDoTask,
    method: 'post',
    data: params
  })
}

export default{
  listTaskByPage,
  backTaskFlow,
  endTaskFlow, listToDoTask
}
