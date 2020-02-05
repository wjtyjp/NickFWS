import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 获取市场价格调整全网比对任务列表
export function listTask(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.listTask,
    method: 'post',
    data: params
  })
}

// 查询医疗机构
export function listMedInsByPoolArea(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.listMedInsByPoolArea,
    method: 'post',
    data: params
  })
}

// 获取市场价格调整任务详情
export function getTaskDetail(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.listMedInsgetTaskDetailByPoolArea,
    method: 'post',
    data: params
  })
}

// 全网比对查询
export function listCompareResult(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.listCompareResult,
    method: 'post',
    data: params
  })
}

// 全网比对通过
export function saveComparePass(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.saveComparePass,
    method: 'post',
    data: params
  })
}

// 全网比对不通过
export function saveCompareFail(params) {
  return request({
    url: APIUrl.marketPriceInfoManagement.saveCompareFail,
    method: 'post',
    data: params
  })
}

export default{
  listTask,
  listMedInsByPoolArea,
  getTaskDetail,
  listCompareResult,
  saveComparePass,
  saveCompareFail
}
