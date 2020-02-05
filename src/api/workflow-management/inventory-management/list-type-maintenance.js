import request from '../../../utils/request'
import APIUrl from '../../apiUrl/workflow-management'

// 获取清单类型列表
export function listMaterrialBillType(params) {
  return request({
    url: APIUrl.listManintenance.listMaterrialBillType,
    method: 'post',
    data: params
  })
}

// 保存清单类型信息
export function saveMaterrialBillType(params) {
  return request({
    url: APIUrl.listManintenance.saveMaterrialBillType,
    method: 'post',
    data: params
  })
}

// 批量删除清单类型信息
export function deleteMaterrialBillType(params) {
  return request({
    url: APIUrl.listManintenance.deleteMaterrialBillType,
    method: 'post',
    data: params
  })
}

// 更新清单类型信息
export function updateMaterrialBillType(params) {
  return request({
    url: APIUrl.listManintenance.updateMaterrialBillType,
    method: 'post',
    data: params
  })
}

export default{
  listMaterrialBillType,
  saveMaterrialBillType,
  deleteMaterrialBillType,
  updateMaterrialBillType
}
