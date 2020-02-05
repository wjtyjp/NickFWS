import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

export function saveMedinsDeclareItemInfo(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.saveMedinsDeclareItemInfo,
    method: 'post',
    data: params
  })
}

export function saveMedinsDeclareInfo(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.saveMedinsDeclareInfo,
    method: 'post',
    data: params
  })
}

export function saveMedinsCancelDeclare(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.saveMedinsCancelDeclare,
    method: 'post',
    data: params
  })
}

export function listPricAdjmMedinsItem(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.listPricAdjmMedinsItem,
    method: 'post',
    data: params
  })
}

export function getPricAdjmNotcMedinsDetail(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.getPricAdjmNotcMedinsDetail,
    method: 'post',
    data: params
  })
}

export function listPricAdjmNotcMedins(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.listPricAdjmNotcMedins,
    method: 'post',
    data: params
  })
}

export function listPricMedinsItemFee(params) {
  return request({
    url: APIUrl.medicalAdjustmentProjectDeclare.listPricMedinsItemFee,
    method: 'post',
    data: params
  })
}

export default{
  saveMedinsDeclareItemInfo,
  saveMedinsDeclareInfo,
  saveMedinsCancelDeclare,
  listPricAdjmMedinsItem,
  getPricAdjmNotcMedinsDetail,
  listPricAdjmNotcMedins,
  listPricMedinsItemFee
}
