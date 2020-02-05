import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

function savePricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.savePricServitemPt,
    method: 'post',
    data: params
  })
}

function modifyPricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.modifyPricServitemPt,
    method: 'post',
    data: params
  })
}

function listPricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.listPricServitemPt,
    method: 'post',
    data: params
  })
}

function getPricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.getPricServitemPt,
    method: 'post',
    data: params
  })
}

function deletePricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.deletePricServitemPt,
    method: 'post',
    data: params
  })
}

export default{
  savePricServitemPt,
  modifyPricServitemPt,
  listPricServitemPt,
  getPricServitemPt,
  deletePricServitemPt
}
