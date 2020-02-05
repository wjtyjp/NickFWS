import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function listItemStandardData(params) {
  return request({
    url: APIUrl.projectCharges.listItemStandardData,
    method: 'post',
    data: params
  })
}

export default{
  listItemStandardData
}
