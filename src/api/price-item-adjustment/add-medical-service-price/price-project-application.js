import request from '../../../utils/request'
import APIUrl from '../../apiUrl/price-item-adjustment'
// 一次性耗材弹框信息查询
export function queryServitemMcs(params) {
  return request({
    url: APIUrl.priceProjectApplication.queryServitemMcs,
    method: 'post',
    data: params
  })
}
// 成本计算内容中保存按钮
export function saveCost(params) {
  return request({
    url: APIUrl.priceProjectApplication.saveCost,
    method: 'post',
    data: params
  })
}
// 成本计算内容删除按钮
export function delCost(params) {
  return request({
    url: APIUrl.priceProjectApplication.delCost,
    method: 'post',
    data: params
  })
}
// 申请内容右上角保存按钮
export function applyItem(params) {
  return request({
    url: APIUrl.priceProjectApplication.applyItem,
    method: 'post',
    data: params
  })
}
// 要上传附件列表信息查询
export function queryInventory(params) {
  return request({
    url: APIUrl.priceProjectApplication.queryInventory,
    method: 'post',
    data: params
  })
}
// 除外内容弹出框信息查询
export function queryExctCont(params) {
  return request({
    url: APIUrl.priceProjectApplication.queryExctCont,
    method: 'post',
    data: params
  })
}
// 除外内容弹出框信息查询
export function download(params) {
  return request({
    url: APIUrl.priceProjectApplication.download,
    method: 'post',
    data: params
  })
}
// 除外内容弹出框信息查询
export function del(params) {
  return request({
    url: APIUrl.priceProjectApplication.del,
    method: 'post',
    data: params
  })
}
export default{
  queryExctCont,
  queryInventory,
  applyItem,
  delCost,
  saveCost,
  queryServitemMcs,
  del,
  download
}
