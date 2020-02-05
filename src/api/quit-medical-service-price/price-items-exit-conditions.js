import request from '../../utils/request'
import APIUrl from '../apiUrl/quit-medical-service-price'
// 获取退出条件列表
function listItemOutCondition(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.listItemOutCondition,
    method: 'post',
    data: params
  })
}
//   查看条件信息的详情
function getItemOutCondition(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.getItemOutCondition,
    method: 'post',
    data: params
  })
}
//   保存价格项目退出条件
function saveItemOutCondition(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.saveItemOutCondition,
    method: 'post',
    data: params
  })
}

function updateOutCondition(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.updateOutCondition,
    method: 'post',
    data: params
  })
}

function deleteOutCondition(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.deleteOutCondition,
    method: 'post',
    data: params
  })
}

function updateRlsFlag(params) {
  return request({
    url: APIUrl.priceItemsExitConditions.updateRlsFlag,
    method: 'post',
    data: params
  })
}
export default{
  listItemOutCondition, getItemOutCondition, saveItemOutCondition, updateOutCondition, deleteOutCondition, updateRlsFlag
}
