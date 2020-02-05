import request from '../../utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 新增保存
export function saveItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemFilling.saveItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 修改保存
export function updateItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemFilling.updateItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 删除
export function deleteItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemFilling.deleteItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 新增页面，选择服务项目
export function listServiceItem(params) {
  return request({
    url: APIUrl.newItemFilling.listServiceItem,
    method: 'post',
    data: params
  })
}
// 上报
export function reportItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemFilling.reportItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 查询
export function listItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemFilling.listItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 根据医疗机构编码查询开展科室
export function listDeptByMedinsId(params) {
  return request({
    url: APIUrl.newItemFilling.listDeptByMedinsId,
    method: 'post',
    data: params
  })
}
// 根据省份编码查询统筹区信息
export function listPoolAreaByProv(params) {
  return request({
    url: APIUrl.newItemFilling.listPoolAreaByProv,
    method: 'post',
    data: params
  })
}
// 详情
export function getItemMonitoringAddDetail(params) {
  return request({
    url: APIUrl.newItemFilling.getItemMonitoringAddDetail,
    method: 'post',
    data: params
  })
}
export default{
  saveItemMonitoringAdd, updateItemMonitoringAdd, deleteItemMonitoringAdd, listServiceItem, reportItemMonitoringAdd, listItemMonitoringAdd, listDeptByMedinsId, listPoolAreaByProv, getItemMonitoringAddDetail
}
