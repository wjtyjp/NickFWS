import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListInstitutionCost(params) {
  return request({
    url: APIUrl.factorCostData.ListInstitutionCost,
    method: 'post',
    data: params
  })
}

export default{
  ListInstitutionCost
}
