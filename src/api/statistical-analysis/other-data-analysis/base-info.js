import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListBasicInfo(params) {
  return request({
    url: APIUrl.baseInfo.ListBasicInfo,
    method: 'post',
    data: params
  })
}

export default{
  ListBasicInfo
}
