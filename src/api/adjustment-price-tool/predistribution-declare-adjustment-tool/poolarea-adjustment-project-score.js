import request from '../../../utils/request'
import APIUrl from '../../apiUrl/adjustment-price-tool'

// 统筹区调价项目评分---新增保存【保存】保存价格调整方案详情
export function savePricAdjmSchmDetail(params) {
  return request({
    url: APIUrl.poolareaAdjustmentProjectScore.savePricAdjmSchmDetail,
    method: 'post',
    data: params
  })
}

// 统筹区调价项目--加载符合调价项目信息【查询】查询条件项目信息列表
export function listPricAdjmSchmItemScore(params) {
  return request({
    url: APIUrl.poolareaAdjustmentProjectScore.listPricAdjmSchmItemScore,
    method: 'post',
    data: params
  })
}

export default{
  savePricAdjmSchmDetail,
  listPricAdjmSchmItemScore
}
