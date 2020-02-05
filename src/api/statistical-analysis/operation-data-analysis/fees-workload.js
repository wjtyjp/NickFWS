import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListFeesStandard(params) {
  return request({
    url: APIUrl.feesWorkload.ListFeesStandard,
    method: 'post',
    data: params
  })
}

export default{
  ListFeesStandard
}
