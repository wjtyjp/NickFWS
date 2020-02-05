import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListServiceQualityInfo(params) {
  return request({
    url: APIUrl.serviceCapabilityData.ListServiceQualityInfo,
    method: 'post',
    data: params
  })
}

export default{
  ListServiceQualityInfo
}
