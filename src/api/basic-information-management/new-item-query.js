import request from '../../utils/request'
import { serviceDownLoad } from '@/utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 详情
export function getItemMonitoringAddDetail(params) {
  return request({
    url: APIUrl.newItemQuery.getItemMonitoringAddDetail,
    method: 'post',
    data: params
  })
}
// 查询
export function listItemMonitoringAdd(params) {
  return request({
    url: APIUrl.newItemQuery.listItemMonitoringAdd,
    method: 'post',
    data: params
  })
}
// 根据省份编码查询统筹区信息
export function listPoolAreaByProv(params) {
  return request({
    url: APIUrl.newItemQuery.listPoolAreaByProv,
    method: 'post',
    data: params
  })
}
// 导出
export function exportItemMonitoringAdd(params) {
  return serviceDownLoad({
    url: APIUrl.newItemQuery.exportItemMonitoringAdd,
    method: 'post',
    data: params
  })
}

export default{
  getItemMonitoringAddDetail, listItemMonitoringAdd, listPoolAreaByProv, exportItemMonitoringAdd
}
