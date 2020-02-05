import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 保存
export function saveMechanismsAdjustPriceStart(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentStart.saveMechanismsAdjustPriceStart,
    method: 'post',
    data: params
  })
}

// 所有数据右选按钮（数据没分页都需要加载）
export function selectAllServiceItem(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentStart.selectAllServiceItem,
    method: 'post',
    data: params
  })
}

// 提交
export function submitMechanismsAdjustPriceStart(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentStart.submitMechanismsAdjustPriceStart,
    method: 'post',
    data: params
  })
}

// 查询
export function listServiceItem(params) {
  return request({
    url: APIUrl.priceMechanismAdjustmentStart.listServiceItem,
    method: 'post',
    data: params
  })
}

export default{
  saveMechanismsAdjustPriceStart,
  selectAllServiceItem,
  submitMechanismsAdjustPriceStart,
  listServiceItem
}

