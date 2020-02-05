import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

function saveTagManage(params) {
  return request({
    url: APIUrl.tagManagement.saveTagManage,
    method: 'post',
    data: params
  })
}

function updateTagManage(params) {
  return request({
    url: APIUrl.tagManagement.updateTagManage,
    method: 'post',
    data: params
  })
}

function listTagManage(params) {
  return request({
    url: APIUrl.tagManagement.listTagManage,
    method: 'post',
    data: params
  })
}

function getTagManage(params) {
  return request({
    url: APIUrl.tagManagement.getTagManage,
    method: 'post',
    data: params
  })
}

function deleteTagManage(params) {
  return request({
    url: APIUrl.tagManagement.deleteTagManage,
    method: 'post',
    data: params
  })
}

export default{
  saveTagManage,
  updateTagManage,
  listTagManage,
  getTagManage,
  deleteTagManage
}
