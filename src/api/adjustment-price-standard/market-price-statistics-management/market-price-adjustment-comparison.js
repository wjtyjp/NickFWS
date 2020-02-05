import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 全网项目比对不通过
export function saveCompareFail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.saveCompareFail,
    method: 'post',
    data: params
  })
}
// 全网项目比对保存
export function savePricServItemCompare(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.savePricServItemCompare,
    method: 'post',
    data: params
  })
}
// 全网项目比对通过
export function saveComparePass(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.saveComparePass,
    method: 'post',
    data: params
  })
}
// 弹窗查询
export function listCompareResult(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.listCompareResult,
    method: 'post',
    data: params
  })
}
// 主页查询
export function listTask(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.listTask,
    method: 'post',
    data: params
  })
}
// 详情
export function getTaskDetail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentComparison.getTaskDetail,
    method: 'post',
    data: params
  })
}

export default{
  saveCompareFail, savePricServItemCompare, saveComparePass, listCompareResult, listTask, getTaskDetail
}
