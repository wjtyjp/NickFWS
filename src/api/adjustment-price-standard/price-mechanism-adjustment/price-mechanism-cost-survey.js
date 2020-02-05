import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 页面初始化（获取价格机制性成本调查详情）
export function getMechanismsCostInvestigate(params) {
  return request({
    url: APIUrl.priceMechanismCostSurvey.getMechanismsCostInvestigate,
    method: 'post',
    data: params
  })
}

// 保存按钮
export function saveMechanismsCostInvestigate(params) {
  return request({
    url: APIUrl.priceMechanismCostSurvey.saveMechanismsCostInvestigate,
    method: 'post',
    data: params
  })
}

// 提交
export function submitMechanismsCostInvestigate(params) {
  return request({
    url: APIUrl.priceMechanismCostSurvey.submitMechanismsCostInvestigate,
    method: 'post',
    data: params
  })
}

export default{
  getMechanismsCostInvestigate,
  saveMechanismsCostInvestigate,
  submitMechanismsCostInvestigate
}
