import request from '../../../utils/request'
import APIUrl from '../../apiUrl/price-item-adjustment'
// 保存方案
export function saveItemImputationPlan(params) {
  return request({
    url: APIUrl.proposedPriceProjectSpecificationScheme.saveItemImputationPlan,
    method: 'post',
    data: params
  })
}
// 查询方案任务
export function listTask(params) {
  return request({
    url: APIUrl.proposedPriceProjectSpecificationScheme.listTask,
    method: 'post',
    data: params
  })
}
// 价格项目规范建议方案
export function getItemImputationPlan(params) {
  return request({
    url: APIUrl.proposedPriceProjectSpecificationScheme.getItemImputationPlan,
    method: 'post',
    data: params
  })
}
export default{
  saveItemImputationPlan,
  listTask,
  getItemImputationPlan
}
