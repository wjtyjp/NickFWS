import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/basic-information-management'
// 【页面加载】获取药品信息列表
export function listDrugsInfo(params) {
  return request({
    url: APIUrl.drugInformationInquiry.listDrugsInfo,
    method: 'post',
    data: params
  })
}

// 【选择一个药品信息获取详情】获取药品详情信息
export function getDrugsInfo(params) {
  return request({
    url: APIUrl.drugInformationInquiry.getDrugsInfo,
    method: 'post',
    data: params
  })
}

export default{
  listDrugsInfo, getDrugsInfo
}
