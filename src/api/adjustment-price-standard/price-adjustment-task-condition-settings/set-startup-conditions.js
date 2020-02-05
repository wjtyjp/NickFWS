import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 停止启动条件
export function stopStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.stopStartupConditionSet,
    method: 'post',
    data: params
  })
}

// 删除启动条件
export function deleteStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.deleteStartupConditionSet,
    method: 'post',
    data: params
  })
}
// 发布启动条件
export function releaseStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.releaseStartupConditionSet,
    method: 'post',
    data: params
  })
}
// 新增保存
export function saveStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.saveStartupConditionSet,
    method: 'post',
    data: params
  })
}
// 查看详情
export function getStartupConditionSetDetail(params) {
  return request({
    url: APIUrl.setStartupConditions.getStartupConditionSetDetail,
    method: 'post',
    data: params
  })
}
// 查询
export function listStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.listStartupConditionSet,
    method: 'post',
    data: params
  })
}
// 新增查询项目列表信息
export function listServiceItem(params) {
  return request({
    url: APIUrl.setStartupConditions.listServiceItem,
    method: 'post',
    data: params
  })
}
// 根据省级编码查询统筹区
export function listPoolAreaByProv(params) {
  return request({
    url: APIUrl.setStartupConditions.listPoolAreaByProv,
    method: 'post',
    data: params
  })
}
// 修改保存
export function updateStartupConditionSet(params) {
  return request({
    url: APIUrl.setStartupConditions.updateStartupConditionSet,
    method: 'post',
    data: params
  })
}

export default{
  stopStartupConditionSet,
  deleteStartupConditionSet,
  releaseStartupConditionSet,
  saveStartupConditionSet,
  getStartupConditionSetDetail,
  listStartupConditionSet,
  listServiceItem,
  listPoolAreaByProv,
  updateStartupConditionSet
}
