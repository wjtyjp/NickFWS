import request from '@/utils/request'
import { serviceDownLoad } from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 按关键词查找
export function listServiceItem(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.listServiceItem,
    method: 'post',
    data: params
  })
}
// 查询医疗机构
export function listMedInsByPoolArea(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.listMedInsByPoolArea,
    method: 'post',
    data: params
  })
}
// 保存
export function savePriceRecordApply(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.savePriceRecordApply,
    method: 'post',
    data: params
  })
}
// 提交
export function submitPriceRecordApply(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.submitPriceRecordApply,
    method: 'post',
    data: params
  })
}
// 导出
export function exportItemInfo(params) {
  return serviceDownLoad({
    url: APIUrl.marketPriceAdjustmentApplication.exportItemInfo,
    method: 'post',
    data: params
  })
}
// 右表查询
export function listPricSchmServItemBySchmId(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.listPricSchmServItemBySchmId,
    method: 'post',
    data: params
  })
}
// 附件列表查询
export function listTaskAttBySchmId(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentApplication.listTaskAttBySchmId,
    method: 'post',
    data: params
  })
}

export default{
  listServiceItem, listMedInsByPoolArea, savePriceRecordApply, submitPriceRecordApply, exportItemInfo, listPricSchmServItemBySchmId, listTaskAttBySchmId
}
