import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 查询任务信息列表
export function queryTaskForPriceSet(params) {
  return request({
    url: APIUrl.pricingTaskQuery.queryTaskForPriceSet,
    method: 'post',
    data: params
  })
}
// 查询任务详情
export function queryPriceSetTaskInfo(params) {
  return request({
    url: APIUrl.pricingTaskQuery.queryPriceSetTaskInfo,
    method: 'post',
    data: params
  })
}
export default{
  queryTaskForPriceSet, queryPriceSetTaskInfo
}
