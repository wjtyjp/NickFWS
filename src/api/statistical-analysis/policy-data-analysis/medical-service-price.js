import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListProvinceServiceFees(params) {
  return request({
    url: APIUrl.medicalServicePrice.ListProvinceServiceFees,
    method: 'post',
    data: params
  })
}

export default{
  ListProvinceServiceFees
}
