import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'
// 获取识别项主键
export function getRiskPresentationId(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.getRiskPresentationId,
    method: 'post',
    data: params
  })
}
// 修改识别项目
export function updateRiskPresentation(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.updateRiskPresentation,
    method: 'post',
    data: params
  })
}
// 删除风险识别
export function deleteRiskAssessment(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.deleteRiskAssessment,
    method: 'post',
    data: params
  })
}
// 删除风险识别项目
export function deleteRiskPresentation(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.deleteRiskPresentation,
    method: 'post',
    data: params
  })
}
// 新增识别项目
export function saveRiskPresentation(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.saveRiskPresentation,
    method: 'post',
    data: params
  })
}
// 新增风险识别
export function saveRiskAssessment(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.saveRiskAssessment,
    method: 'post',
    data: params
  })
}// 修改风险识别信息
export function updateRiskAssessment(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.updateRiskAssessment,
    method: 'post',
    data: params
  })
}// 获取风险识别主键
// export function getRiskAssessmentId(params) {
//   return request({
//     url: APIUrl.riskDatabaseIdentification.getRiskAssessmentId,
//     method: 'post',
//     data: params
//   })
// }
// 获取风险识别信息
export function getRiskAssessment(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.getRiskAssessment,
    method: 'post',
    data: params
  })
}
// 获取风险识别列表
export function listRiskAssessment(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.listRiskAssessment,
    method: 'post',
    data: params
  })
}
// 获取风险识别项信息
export function getRiskPresentation(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.getRiskPresentation,
    method: 'post',
    data: params
  })
}
// 获取风险识别项列表
export function listRiskPresentation(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.listRiskPresentation,
    method: 'post',
    data: params
  })
}
// 识别
export function updateRiskAssessmentSb(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.updateRiskAssessmentSb,
    method: 'post',
    data: params
  })
}
// 评估
export function updateRiskAssessmentBg(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.updateRiskAssessmentBg,
    method: 'post',
    data: params
  })
}
// 批量保存风险识别项
export function saveRiskPresentations(params) {
  return request({
    url: APIUrl.riskDatabaseIdentification.saveRiskPresentations,
    method: 'post',
    data: params
  })
}
export default{
  getRiskPresentationId, updateRiskPresentation, deleteRiskAssessment, deleteRiskPresentation, saveRiskPresentation,
  saveRiskAssessment, updateRiskAssessment, getRiskAssessment, listRiskAssessment, getRiskPresentation,
  listRiskPresentation, updateRiskAssessmentSb, updateRiskAssessmentBg, saveRiskPresentations
}
