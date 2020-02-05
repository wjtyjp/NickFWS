import request from '../../utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 医疗服务项目列表查询
export function listItemInfo(params) {
  return request({
    url: APIUrl.medicalserviceiteminquiry.listItemInfo,
    method: 'post',
    data: params
  })
}

// 医疗服务项目详情查询
export function getItemInfo(params) {
  return request({
    url: APIUrl.medicalserviceiteminquiry.getItemInfo,
    method: 'post',
    data: params
  })
}

export default{
  listItemInfo, getItemInfo
}
