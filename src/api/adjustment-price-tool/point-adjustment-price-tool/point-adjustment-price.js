import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'
import { serviceDownLoad } from '@/utils/request'

function listPricServitemPtOfAdjust(params) {
  return request({
    url: APIUrl.pointAdjustmentPrice.listPricServitemPtOfAdjust,
    method: 'post',
    data: params
  })
}

function exportPricSerPtInfoOfAdjust(params) {
  return serviceDownLoad({
    url: APIUrl.pointAdjustmentPrice.exportPricSerPtInfoOfAdjust,
    method: 'post',
    data: params
  })
}

export default{
  listPricServitemPtOfAdjust,
  exportPricSerPtInfoOfAdjust
}
