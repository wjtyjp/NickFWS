import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 查询列表
export function listTask(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.listTask,
    method: 'post',
    data: params
  })
}

// 调价方案保存（方案）
export function saveMechanismsAdjustPricePlan(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.saveMechanismsAdjustPricePlan,
    method: 'post',
    data: params
  })
}

// 提交（方案）
export function submitMechanismsAdjustPricePlan(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.submitMechanismsAdjustPricePlan,
    method: 'post',
    data: params
  })
}

// 查询（调价弹出框）
export function listSchmServiceItem(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.listSchmServiceItem,
    method: 'post',
    data: params
  })
}

// 保存（调价弹出框）
export function updateAdjustPrice(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.updateAdjustPrice,
    method: 'post',
    data: params
  })
}

// 处理弹窗(获取机制性任务详情)
export function getMechanismsAdjustPrice(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentPlan.getMechanismsAdjustPrice,
    method: 'post',
    data: params
  })
}

export default{
  listTask,
  saveMechanismsAdjustPricePlan,
  submitMechanismsAdjustPricePlan,
  listSchmServiceItem,
  updateAdjustPrice,
  getMechanismsAdjustPrice
}

