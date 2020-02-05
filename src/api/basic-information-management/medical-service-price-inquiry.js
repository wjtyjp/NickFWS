import request from '../../utils/request'
import APIUrl from '../apiUrl/basic-information-management'
// 医疗服务价格列表查询
export function listItemPricInfo(params) {
  return request({
    url: APIUrl.medicalservicepriceinquiry.listItemPricInfo,
    method: 'post',
    data: params
  })
}

// 医疗服务价格详情查询
export function getItemInfo(params) {
  return request({
    url: APIUrl.medicalservicepriceinquiry.getItemInfo,
    method: 'post',
    data: params
  })
}

export default{
  listItemPricInfo, getItemInfo
}
