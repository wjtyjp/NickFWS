import request from '../../utils/request'
import APIUrl from '../apiUrl/adjustment-price-tool'

function listPricAdjmSchm(params) {
  return request({
    url: APIUrl.adjustPriceSchemeQuery.listPricAdjmSchm,
    method: 'post',
    data: params
  })
}

function getPricAdjmSchmDetail(params) {
  return request({
    url: APIUrl.adjustPriceSchemeQuery.getPricAdjmSchmDetail,
    method: 'post',
    data: params
  })
}
function deletePricAdjmSchm(params) {
  return request({
    url: APIUrl.adjustPriceSchemeQuery.deletePricAdjmSchm,
    method: 'post',
    data: params
  })
}

export default{
  listPricAdjmSchm,
  getPricAdjmSchmDetail,
  deletePricAdjmSchm
}
