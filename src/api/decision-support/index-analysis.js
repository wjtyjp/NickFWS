import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/decision-support'

// 指数分析子菜单价格要素的成本构成
export function ListPriceElementCost(params) {
  return request({
    url: APIUrl.indexAnalysis.costStructure.ListPriceElementCost,
    method: 'post',
    data: params
  })
}

export default{
  ListPriceElementCost
}
