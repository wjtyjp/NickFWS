import request from '@/utils/request'
import { serviceDownLoad } from '@/utils/request'
import APIUrl from '../../apiUrl/adjustment-price-standard'
// 一项目列表导出
export function exportItemInfo(params) {
  return serviceDownLoad({
    url: APIUrl.regionalPriceCoordinationStart.exportItemInfo,
    method: 'post',
    data: params
  })
}
// 区域价格协调启动信息提交
export function saveAreaPriceStartInfo(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationStart.saveAreaPriceStartInfo,
    method: 'post',
    data: params
  })
}
// 成本计算内容删除按钮
export function queryServItemList(params) {
  return request({
    url: APIUrl.regionalPriceCoordinationStart.queryServItemList,
    method: 'post',
    data: params
  })
}

export default{
  exportItemInfo, saveAreaPriceStartInfo, queryServItemList
}
