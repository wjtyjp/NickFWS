import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-standard'
// 点击【备案登记】
export function saveRegistration(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentRegister.saveRegistration,
    method: 'post',
    data: params
  })
}
// 查询医疗机构
export function listMedInsByPoolArea(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentRegister.listMedInsByPoolArea,
    method: 'post',
    data: params
  })
}
// 详情
export function getTaskDetail(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentRegister.getTaskDetail,
    method: 'post',
    data: params
  })
}
// 查询
export function listTask(params) {
  return request({
    url: APIUrl.marketPriceAdjustmentRegister.listTask,
    method: 'post',
    data: params
  })
}

export default{
  saveRegistration, listMedInsByPoolArea, getTaskDetail, listTask
}
