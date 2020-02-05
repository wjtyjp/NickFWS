import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 查询】获取工作流中某一环节的任务信息列表
export function queryTaskForAreaPrice(params) {
  return request({
    url: APIUrl.leadingUnitParticipatingUnit.queryTaskForAreaPrice,
    method: 'post',
    data: params
  })
}
// 详情】获取牵头单位与参与单位确认环节的任务详情
export function queryAreaPriceInfo(params) {
  return request({
    url: APIUrl.leadingUnitParticipatingUnit.queryAreaPriceInfo,
    method: 'post',
    data: params
  })
}
// 提交区域价格协调调价信息
export function saveCorpInfo(params) {
  return request({
    url: APIUrl.leadingUnitParticipatingUnit.saveCorpInfo,
    method: 'post',
    data: params
  })
}

export default{
  queryTaskForAreaPrice, saveCorpInfo, queryAreaPriceInfo
}
