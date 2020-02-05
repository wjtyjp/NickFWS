import request from '../../utils/request'
import { serviceDownLoad } from '@/utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 详情
export function getItemMonitoringDetail(params) {
  return request({
    url: APIUrl.itemMonitoringQuery.getItemMonitoringDetail,
    method: 'post',
    data: params
  })
}
// 查询
export function listItemMonitoring(params) {
  return request({
    url: APIUrl.itemMonitoringQuery.listItemMonitoring,
    method: 'post',
    data: params
  })
}
// 根据省份编码查询统筹区信息
export function listPoolAreaByProv(params) {
  return request({
    url: APIUrl.itemMonitoringQuery.listPoolAreaByProv,
    method: 'post',
    data: params
  })
}
// 导出
export function exportItemMonitoring(params) {
  return serviceDownLoad({
    url: APIUrl.itemMonitoringQuery.exportItemMonitoring,
    method: 'post',
    data: params
  })
}

export default{
  getItemMonitoringDetail, listItemMonitoring, listPoolAreaByProv, exportItemMonitoring
}
