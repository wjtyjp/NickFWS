import request from '../../utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 新增保存
export function saveItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringList.saveItemMonitoring,
    method: 'post',
    data: params
  })
}
// 修改保存
export function updateItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringList.updateItemMonitoring,
    method: 'post',
    data: params
  })
}
// 删除
export function deleteItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringList.deleteItemMonitoring,
    method: 'post',
    data: params
  })
}
// 新增页面，选择服务项目
export function listServiceItem(params) {
  return request({
    url: APIUrl.itemMonitoringList.listServiceItem,
    method: 'post',
    data: params
  })
}
// 上报
export function reportItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringList.reportItemMonitoring,
    method: 'post',
    data: params
  })
}
// 查询
export function listItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringList.listItemMonitoring,
    method: 'post',
    data: params
  })
}
// 根据医疗机构编码查询开展科室
export function listDeptByMedinsId(params) {
  return request({
    url: APIUrl.itemMonitoringList.listDeptByMedinsId,
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
export function getItemMonitoringDetail(params) {
  return request({
    url: APIUrl.itemMonitoringList.getItemMonitoringDetail,
    method: 'post',
    data: params
  })
}
export default{
  saveItemMonitoring, updateItemMonitoring, deleteItemMonitoring, listServiceItem, reportItemMonitoring, listItemMonitoring, listDeptByMedinsId, listPoolAreaByProv, getItemMonitoringDetail
}
