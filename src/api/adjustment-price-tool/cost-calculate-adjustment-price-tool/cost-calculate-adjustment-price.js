import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'
import { serviceDownLoad } from '../../../utils/request'

// 服务量分配、成本测算方案--查询左边未加载项目
function listPricPoolItemFeeOfServ(params) {
  return request({
    url: APIUrl.costCalculateAdjustmentPrice.listPricPoolItemFeeOfServ,
    method: 'post',
    data: params
  })
}

// 服务量分配、成本测算方案导出项目
function exportPricPoolItemFeeOfServ(params) {
  return serviceDownLoad({
    url: APIUrl.costCalculateAdjustmentPrice.exportPricPoolItemFeeOfServ,
    method: 'post',
    data: params
  })
}

// 成本--新增保存【保存】保存价格调整方案详情
function savePricAdjmSchmDetail(params) {
  return request({
    url: APIUrl.costCalculateAdjustmentPrice.savePricAdjmSchmDetail,
    method: 'post',
    data: params
  })
}

export default{
  listPricPoolItemFeeOfServ,
  exportPricPoolItemFeeOfServ,
  savePricAdjmSchmDetail
}
