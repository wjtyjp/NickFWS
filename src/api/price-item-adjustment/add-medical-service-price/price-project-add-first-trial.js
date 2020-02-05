import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/price-item-adjustment'
// 【查询】 全网项目比对查询
export function listPricServiIemCompareResult(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.listPricServiIemCompareResult,
    method: 'post',
    data: params
  })
}
// 全网比对（allNetWorkCompar）
export function allNetWorkCompar(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.allNetWorkCompar,
    method: 'post',
    data: params
  })
}
// 受理不通过（auditToNoPass）
export function auditToNoPass(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.auditToNoPass,
    method: 'post',
    data: params
  })
}
// 《受理终止（auditToEnd）
export function auditToEnd(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.auditToEnd,
    method: 'post',
    data: params
  })
}
// 受理通过（auditToPass）
export function auditToPass(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.auditToPass,
    method: 'post',
    data: params
  })
}
// 详情（queryServitemDetailData）
export function queryServitemDetailData(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.queryServitemDetailData,
    method: 'post',
    data: params
  })
}
// 查询（queryTask）
export function queryTask(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.queryTask,
    method: 'post',
    data: params
  })
}
// 赋码
export function TaggCode(params) {
  return request({
    url: APIUrl.priceProjectAddFirstTrial.TaggCode,
    method: 'post',
    data: params
  })
}
export default{
  queryTask,
  queryServitemDetailData,
  auditToPass,
  auditToEnd,
  auditToNoPass,
  allNetWorkCompar,
  listPricServiIemCompareResult,
  TaggCode
}
