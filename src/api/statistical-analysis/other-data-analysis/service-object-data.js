import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListMedinsTargetServ(params) {
  return request({
    url: APIUrl.serviceObjectData.ListMedinsTargetServ,
    method: 'post',
    data: params
  })
}

export default{
  ListMedinsTargetServ
}
