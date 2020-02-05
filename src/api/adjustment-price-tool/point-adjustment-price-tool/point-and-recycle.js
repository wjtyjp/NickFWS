import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'
import { serviceDownLoad } from '@/utils/request'
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
// 配置与导入项目点数--导出点数项目
function exportPricSerPtInfo(params) {
  return serviceDownLoad({
    url: APIUrl.pointAndRecycle.exportPricSerPtInfo,
    method: 'post',
    data: params
  })
}
// 点数与回收率--导入接口（批量保存点数与回收率）
function saveBatchPricServitemPt(params) {
  return request({
    url: APIUrl.pointAndRecycle.saveBatchPricServitemPt,
    method: 'post',
    data: params
  })
}
export default{
  savePricServitemPt,
  modifyPricServitemPt,
  listPricServitemPt,
  getPricServitemPt,
  deletePricServitemPt,
  exportPricSerPtInfo,
  saveBatchPricServitemPt
}
