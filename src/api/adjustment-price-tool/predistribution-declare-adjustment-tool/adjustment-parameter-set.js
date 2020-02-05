import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

// 新增保存【保存】保存价格调整方案详情
export function savePricAdjmSchmDetail(params) {
  return request({
    url: APIUrl.adjustmentParameterSet.savePricAdjmSchmDetail,
    method: 'post',
    data: params
  })
}

// 查询参与调价医疗机构【查询】医疗机构项目费用统计信息列表
export function listPricMedinsInfo(params) {
  return request({
    url: APIUrl.adjustmentParameterSet.listPricMedinsInfo,
    method: 'post',
    data: params
  })
}

export default{
  savePricAdjmSchmDetail,
  listPricMedinsInfo
}
