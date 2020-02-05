// 地方配置清单
import request from '../../../utils/request'
import APIUrl from '../../apiUrl/workflow-management'

// 获取清单配置列表
export function listMaterrialBillConfig(params) {
  return request({
    url: APIUrl.listManintenance.listMaterrialBillConfig,
    method: 'post',
    data: params
  })
}

// 保存清单配置信息
export function saveMaterrialBillConfig(params) {
  return request({
    url: APIUrl.listManintenance.saveMaterrialBillConfig,
    method: 'post',
    data: params
  })
}

// 批量删除清单配置信息
export function deleteMaterrialBillConfig(params) {
  return request({
    url: APIUrl.listManintenance.deleteMaterrialBillConfig,
    method: 'post',
    data: params
  })
}

// 更新清单配置信息
export function updateMaterrialBillConfig(params) {
  return request({
    url: APIUrl.listManintenance.updateMaterrialBillConfig,
    method: 'post',
    data: params
  })
}

export default{
  listMaterrialBillConfig,
  saveMaterrialBillConfig,
  deleteMaterrialBillConfig,
  updateMaterrialBillConfig
}
