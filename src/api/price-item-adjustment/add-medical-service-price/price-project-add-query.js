import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/price-item-adjustment'
// 《删除》按钮
export function deleteServitemDetailData(params) {
  return request({
    url: APIUrl.priceProjectAddQuery.deleteServitemDetailData,
    method: 'post',
    data: params
  })
}
// 《查看》《编辑》按钮查询页面详情
export function queryServitemDetailData(params) {
  return request({
    url: APIUrl.priceProjectAddQuery.queryServitemDetailData,
    method: 'post',
    data: params
  })
}
// 《查询》按钮
export function queryServitemData(params) {
  return request({
    url: APIUrl.priceProjectAddQuery.queryServitemData,
    method: 'post',
    data: params
  })
}
// 《《申报》按钮
export function declareServitemData(params) {
  return request({
    url: APIUrl.priceProjectAddQuery.declareServitemData,
    method: 'post',
    data: params
  })
}
export default{
  declareServitemData,
  queryServitemData,
  queryServitemDetailData,
  deleteServitemDetailData
}
