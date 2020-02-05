import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// 删除风险信息
export function deleteRiskItem(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.deleteRiskItem,
    method: 'post',
    data: params
  })
}
// 修改分组信息
export function updateRiskptGrp(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.updateRiskptGrp,
    method: 'post',
    data: params
  })
}
// 分组修改风险点成员
export function updatePricRiskptGrpRlts(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.updatePricRiskptGrpRlts,
    method: 'post',
    data: params
  })
}
// 分组增加风险点成员
export function savePricRiskptGrpRlts(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.savePricRiskptGrpRlts,
    method: 'post',
    data: params
  })
}
// 删除分组信息
export function deleteRiskptGrp(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.deleteRiskptGrp,
    method: 'post',
    data: params
  })
}
// 删除分组风险点成员
export function deletePricRiskptGrpRlts(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.deletePricRiskptGrpRlts,
    method: 'post',
    data: params
  })
}
// 修改风险信息
export function updateRiskItem(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.updateRiskItem,
    method: 'post',
    data: params
  })
}
// 新增风险信息
export function saveRiskItem(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.saveRiskItem,
    method: 'post',
    data: params
  })
}
// 新增风险分组
export function saveRiskptGrp(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.saveRiskptGrp,
    method: 'post',
    data: params
  })
}
// 获取分组信息
export function getRiskptGrp(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.getRiskptGrp,
    method: 'post',
    data: params
  })
}
// 获取分组列表
export function listRiskptGrp(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.listRiskptGrp,
    method: 'post',
    data: params
  })
}
// 获取风险信息列表
export function listRiskItem(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.listRiskItem,
    method: 'post',
    data: params
  })
}
// 获取风险详细信息
export function getRiskItem(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.getRiskItem,
    method: 'post',
    data: params
  })
}

export function listPricRiskptGrpRlts(params) {
  return request({
    url: APIUrl.riskAssessmentManagement.listPricRiskptGrpRlts,
    method: 'post',
    data: params
  })
}

export default{
  deleteRiskItem, updateRiskptGrp, updatePricRiskptGrpRlts, savePricRiskptGrpRlts, deleteRiskptGrp,
  deletePricRiskptGrpRlts, updateRiskItem, saveRiskItem, saveRiskptGrp, getRiskptGrp, listRiskptGrp,
  listRiskItem, getRiskItem, listPricRiskptGrpRlts
}
