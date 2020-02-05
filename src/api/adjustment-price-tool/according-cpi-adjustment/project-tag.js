import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

// 获取标签下拉框值
export function listTagManage(params) {
  return request({
    url: APIUrl.projectTag.listTagManage,
    method: 'post',
    data: params
  })
}

// 保存
export function saveServitemTagRelation(params) {
  console.log(params.lablRltsId)
  let urlParam = params.lablRltsId === ''
    ? APIUrl.projectTag.saveServitemTagRelation : APIUrl.projectTag.updateServitemTagRelation
  return request({
    url: urlParam,
    method: 'post',
    data: params
  })
}

// 删除
export function deleteServitemTagRelation(params) {
  return request({
    url: APIUrl.projectTag.deleteServitemTagRelation,
    method: 'post',
    data: params
  })
}

// 查询列表
export function listServitemTagRelation(params) {
  return request({
    url: APIUrl.projectTag.listServitemTagRelation,
    method: 'post',
    data: params
  })
}

// 查询详情
export function getServitemTagRelation(params) {
  return request({
    url: APIUrl.projectTag.getServitemTagRelation,
    method: 'post',
    data: params
  })
}

export default{
  listTagManage,
  saveServitemTagRelation,
  listServitemTagRelation,
  getServitemTagRelation,
  deleteServitemTagRelation
}
