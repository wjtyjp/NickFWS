import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 查询
export function listApply(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentQuery.listApply,
    method: 'post',
    data: params
  })
}
// 详情
export function getTaskDetail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentQuery.getTaskDetail,
    method: 'post',
    data: params
  })
}

// 根据方案id查询服务项目
export function listPricSchmServItemBySchmId(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentQuery.listPricSchmServItemBySchmId,
    method: 'post',
    data: params
  })
}

export default{
  listApply, getTaskDetail, listPricSchmServItemBySchmId
}
