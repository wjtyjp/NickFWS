import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定任务调价启动
// 提交（方案）
export function submitSpecialTaskPlan(params) {
  return request({
    url: APIUrl.specificTaskAdjusementPlan.submitSpecialTaskPlan,
    method: 'post',
    data: params
  })
}

// 保存（方案）
export function saveSpecialTaskPlan(params) {
  return request({
    url: APIUrl.specificTaskAdjusementPlan.saveSpecialTaskPlan,
    method: 'post',
    data: params
  })
}

export default{
  submitSpecialTaskPlan,
  saveSpecialTaskPlan
}
