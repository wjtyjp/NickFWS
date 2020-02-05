import request from '.././../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'

// 特定任务调价启动
// 保存按钮
export function saveSpecialTaskStart(params) {
  return request({
    url: APIUrl.specificTaskAdjustmentStart.saveSpecialTaskStart,
    method: 'post',
    data: params
  })
}

// 提交按钮
export function submitSpecialTaskStart(params) {
  return request({
    url: APIUrl.specificTaskAdjustmentStart.submitSpecialTaskStart,
    method: 'post',
    data: params
  })
}

export default{
  saveSpecialTaskStart,
  submitSpecialTaskStart
}
