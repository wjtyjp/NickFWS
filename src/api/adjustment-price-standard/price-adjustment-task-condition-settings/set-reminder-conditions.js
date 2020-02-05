import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 停止启动条件
export function stopRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.stopRemindConditionSet,
    method: 'post',
    data: params
  })
}

// 删除启动条件
export function deleteRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.deleteRemindConditionSet,
    method: 'post',
    data: params
  })
}
// 发布启动条件
export function releaseRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.releaseRemindConditionSet,
    method: 'post',
    data: params
  })
}
// 新增保存
export function saveRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.saveRemindConditionSet,
    method: 'post',
    data: params
  })
}
// 查看详情
export function getRemindConditionSetDetail(params) {
  return request({
    url: APIUrl.setReminderConditions.getRemindConditionSetDetail,
    method: 'post',
    data: params
  })
}
// 查询
export function listRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.listRemindConditionSet,
    method: 'post',
    data: params
  })
}
// 新增查询项目列表信息
export function listServiceItem(params) {
  return request({
    url: APIUrl.setReminderConditions.listServiceItem,
    method: 'post',
    data: params
  })
}
// 根据省级编码查询统筹区
export function listPoolAreaByProv(params) {
  return request({
    url: APIUrl.setReminderConditions.listPoolAreaByProv,
    method: 'post',
    data: params
  })
}
// 修改保存
export function updateRemindConditionSet(params) {
  return request({
    url: APIUrl.setReminderConditions.updateRemindConditionSet,
    method: 'post',
    data: params
  })
}

export default{
  stopRemindConditionSet,
  deleteRemindConditionSet,
  releaseRemindConditionSet,
  saveRemindConditionSet,
  getRemindConditionSetDetail,
  listRemindConditionSet,
  listServiceItem,
  listPoolAreaByProv,
  updateRemindConditionSet
}
