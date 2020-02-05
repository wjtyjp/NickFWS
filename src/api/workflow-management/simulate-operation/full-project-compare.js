import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 网项目比对查询
export function listPricServiIemCompareResult(params) {
  return request({
    url: APIUrl.projectCompare.listPricServiIemCompareResult,
    method: 'post',
    data: params
  })
}

// 全网项目比对保存
export function savePricServItemCompare(params) {
  return request({
    url: APIUrl.projectCompare.savePricServItemCompare,
    method: 'post',
    data: params
  })
}

// 全网项目比对通过
export function savePricServItemComparePass(params) {
  return request({
    url: APIUrl.projectCompare.savePricServItemComparePass,
    method: 'post',
    data: params
  })
}

// 全网项目比对不通过
export function savePricServItemCompareFail(params) {
  return request({
    url: APIUrl.projectCompare.savePricServItemCompareFail,
    method: 'post',
    data: params
  })
}

export default{
  listPricServiIemCompareResult,
  savePricServItemCompare,
  savePricServItemComparePass,
  savePricServItemCompareFail
}
