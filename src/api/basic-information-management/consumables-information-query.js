import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/basic-information-management'
//  【页面加载】获取耗材信息列表
export function listConsumablesInfo(params) {
  return request({
    url: APIUrl.consumablesInformationQuery.listConsumablesInfo,
    method: 'post',
    data: params
  })
}

// 医疗服务项目详情查询
export function getConsumablesInfo(params) {
  return request({
    url: APIUrl.consumablesInformationQuery.getConsumablesInfo,
    method: 'post',
    data: params
  })
}

export default{
  listConsumablesInfo, getConsumablesInfo
}
