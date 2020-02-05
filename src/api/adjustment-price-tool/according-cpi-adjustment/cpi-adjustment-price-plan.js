import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/adjustment-price-tool'
//  【CPI调价方案导出项目
export function exportPricPoolareaItemFeeOfCpi(params) {
  return request({
    url: APIUrl.accordingCpiAdjustment.exportPricPoolareaItemFeeOfCpi,
    method: 'post',
    data: params
  })
}

// CPI调价查询未加载项目--查询项目列表
export function listPricPoolareaItemFeeOfCpi(params) {
  return request({
    url: APIUrl.accordingCpiAdjustment.listPricPoolareaItemFeeOfCpi,
    method: 'post',
    data: params
  })
}

export default{
  listPricPoolareaItemFeeOfCpi, exportPricPoolareaItemFeeOfCpi
}
