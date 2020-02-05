import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/workflow-management'

// 基本情况(医疗服务项目使用情况表格)
export function ListServItemUseSituation(params) {
  return request({
    url: APIUrl.simulationRunPage.ListServItemUseSituation,
    method: 'post',
    data: params
  })
}
// 病人使用情况(不同年龄段使用情况表格)
export function ListAgeUsed(params) {
  return request({
    url: APIUrl.simulationRunPage.ListAgeUsed,
    method: 'post',
    data: params
  })
}
// 医保中心使用情况(根据行政区分类表格)
export function ListMedinsCenterArea(params) {
  return request({
    url: APIUrl.simulationRunPage.ListMedinsCenterArea,
    method: 'post',
    data: params
  })
}
// 医保中心使用情况(根据险种分类表格)
export function ListMedinsCenterInsutype(params) {
  return request({
    url: APIUrl.simulationRunPage.ListMedinsCenterInsutype,
    method: 'post',
    data: params
  })
}
// 医疗机构使用情况(不同医院级别使用情况)
export function ListMedinsLvUsed(params) {
  return request({
    url: APIUrl.simulationRunPage.ListMedinsLvUsed,
    method: 'post',
    data: params
  })
}
// 配置测算任务弹出框中项目相关表格参数
export function ListPricSchmServItemDExtend(params) {
  return request({
    url: APIUrl.simulationRunPage.ListPricSchmServItemDExtend,
    method: 'post',
    data: params
  })
}
// 医疗机构使用情况(医疗服务项目段医院TOP20表格)
export function ListServItemHospRank(params) {
  return request({
    url: APIUrl.simulationRunPage.ListServItemHospRank,
    method: 'post',
    data: params
  })
}
// 病人使用情况(住院病种中含医疗服务项目关联疾病Top20表格)
export function ListServItemRelationDiseaseRank(params) {
  return request({
    url: APIUrl.simulationRunPage.ListServItemRelationDiseaseRank,
    method: 'post',
    data: params
  })
}
// 病人使用情况(不同年龄段使用人数柱状图)
export function ListAgeUsedPsnTIme(params) {
  return request({
    url: APIUrl.simulationRunPage.ListAgeUsedPsnTIme,
    method: 'post',
    data: params
  })
}
// 基本情况(医疗服务项目使用趋势柱状图)
export function ListServItemUseTrend(params) {
  return request({
    url: APIUrl.simulationRunPage.ListServItemUseTrend,
    method: 'post',
    data: params
  })
}
// 基本情况功能(待遇类型使用饼图)
export function ListTreatmentTypeUse(params) {
  return request({
    url: APIUrl.simulationRunPage.ListTreatmentTypeUse,
    method: 'post',
    data: params
  })
}
// 点击查看测算结果下拉框获取基本情况页面只读参数
export function getRunParameter(params) {
  return request({
    url: APIUrl.simulationRunPage.getRunParameter,
    method: 'post',
    data: params
  })
}
// 医保中心使用情况和病人使用情况文字描述
export function getSmltRunRcJe(params) {
  return request({
    url: APIUrl.simulationRunPage.getSmltRunRcJe,
    method: 'post',
    data: params
  })
}
// 配置测算任务下方表格参数保存
export function saveCalculationServItemRelevant(params) {
  return request({
    url: APIUrl.simulationRunPage.saveCalculationServItemRelevant,
    method: 'post',
    data: params
  })
}
// 配置测算任务弹出框表格上方(保存批处理相关参数)
export function saveCalculationTaskRelevant(params) {
  return request({
    url: APIUrl.simulationRunPage.saveCalculationTaskRelevant,
    method: 'post',
    data: params
  })
}
// 生成测算任务（调用阿里云手动流程）
export function updateDataStudioTask(params) {
  return request({
    url: APIUrl.simulationRunPage.updateDataStudioTask,
    method: 'post',
    data: params
  })
}
// 点击填写测算结论弹出框保存结论按钮
export function updateCalculationConclusion(params) {
  return request({
    url: APIUrl.simulationRunPage.updateCalculationConclusion,
    method: 'post',
    data: params
  })
}

export default{
  ListServItemUseSituation,
  ListAgeUsed,
  ListMedinsCenterArea,
  ListMedinsCenterInsutype,
  ListMedinsLvUsed,
  ListPricSchmServItemDExtend,
  ListServItemHospRank,
  ListServItemRelationDiseaseRank,
  ListAgeUsedPsnTIme,
  ListServItemUseTrend,
  ListTreatmentTypeUse,
  getRunParameter,
  getSmltRunRcJe,
  saveCalculationServItemRelevant,
  saveCalculationTaskRelevant,
  updateDataStudioTask,
  updateCalculationConclusion
}
