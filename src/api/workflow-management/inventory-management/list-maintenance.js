import request from '../../../utils/request'
import APIUrl from '../../apiUrl/workflow-management'

// 获取清单列表
export function listMaterrialBill(params) {
  return request({
    url: APIUrl.listManintenance.listMaterrialBill,
    method: 'post',
    data: params
  })
}

// 保存清单信息
export function saveMaterrialBill(params) {
  return request({
    url: APIUrl.listManintenance.saveMaterrialBill,
    method: 'post',
    data: params
  })
}

// 更新清单信息
export function updateMaterrialBill(params) {
  return request({
    url: APIUrl.listManintenance.updateMaterrialBill,
    method: 'post',
    data: params
  })
}

// 批量删除清单信息
export function deleteMaterrialBill(params) {
  return request({
    url: APIUrl.listManintenance.deleteMaterrialBill,
    method: 'post',
    data: params
  })
}

export default{
  listMaterrialBill,
  saveMaterrialBill,
  updateMaterrialBill,
  deleteMaterrialBill
}
