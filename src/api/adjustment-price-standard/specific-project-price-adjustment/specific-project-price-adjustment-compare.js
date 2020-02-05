import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定项目全网比对
// 获取详情
export function getPriceCompareTaskDetail(params) {
  return request({
    url: APIUrl.specificProjectPriceCompare.getPriceCompareTaskDetail,
    method: 'post',
    data: params
  })
}

// 查询
export function listCompareResult(params) {
  return request({
    url: APIUrl.specificProjectPriceCompare.listCompareResult,
    method: 'post',
    data: params
  })
}

// 比对通过
export function saveComparePass(params) {
  return request({
    url: APIUrl.specificProjectPriceCompare.saveComparePass,
    method: 'post',
    data: params
  })
}

// 比对不通过
export function saveCompareFail(params) {
  return request({
    url: APIUrl.specificProjectPriceCompare.saveCompareFail,
    method: 'post',
    data: params
  })
}

export default{
  getPriceCompareTaskDetail,
  listCompareResult,
  saveComparePass,
  saveCompareFail
}
