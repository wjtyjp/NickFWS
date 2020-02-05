import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListProvinceInstitutionServiceFees(params) {
  return request({
    url: APIUrl.medicalInstitutionsServicePrice.ListProvinceInstitutionServiceFees,
    method: 'post',
    data: params
  })
}

export default{
  ListProvinceInstitutionServiceFees
}
