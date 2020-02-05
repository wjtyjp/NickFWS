import request from '../../../utils/request'
import { serviceDownLoad } from '@/utils/request'
import APIUrl from '../../apiUrl/price-item-adjustment'
// 导出项目信息列表
export function exportItemInfo(params) {
  return serviceDownLoad({
    url: APIUrl.standardDataCollectionPriceItems.exportItemInfo,
    method: 'post',
    data: params
  })
}
// [提交]保存并发起项目调整任务
export function saveItemImputation(params) {
  return request({
    url: APIUrl.standardDataCollectionPriceItems.saveItemImputation,
    method: 'post',
    data: params
  })
}
// 查询调整的项目
export function queryImputationItem(params) {
  return request({
    url: APIUrl.standardDataCollectionPriceItems.queryImputationItem,
    method: 'post',
    data: params
  })
}
export default{
  exportItemInfo,
  saveItemImputation,
  queryImputationItem
}
