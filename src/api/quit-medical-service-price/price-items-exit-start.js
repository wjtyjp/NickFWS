import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/quit-medical-service-price'
// 主页面[详情]按钮展示任务详情包括项目
export function getTask(params) {
  return request({
    url: APIUrl.priceItemsExitStart.getTask,
    method: 'post',
    data: params
  })
}
//   主页面的[查询]查询任务列表
export function listTask(params) {
  return request({
    url: APIUrl.priceItemsExitStart.listTask,
    method: 'post',
    data: params
  })
}
//   发起任务中[查询]所有的项目信息
export function queryServitem(params) {
  return request({
    url: APIUrl.priceItemsExitStart.queryServitem,
    method: 'post',
    data: params
  })
}
//   发起页面中[提交]发起退出任务
export function saveItemOutStart(params) {
  return request({
    url: APIUrl.priceItemsExitStart.saveItemOutStart,
    method: 'post',
    data: params
  })
}

//   价格退出提醒

// 退出提醒主界面的[查询]查询退出提醒的项目
export function queryOutServitem(params) {
  return request({
    url: APIUrl.priceItemsExitStart.queryOutServitem,
    method: 'post',
    data: params
  })
}
export default{
  saveItemOutStart, queryServitem, listTask, getTask, queryOutServitem
}
