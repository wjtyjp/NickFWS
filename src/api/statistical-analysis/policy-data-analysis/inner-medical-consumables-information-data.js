import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function listMedicalConsumables(params) {
  return request({
    url: APIUrl.innerMedicalConsumablesInformationData.listMedicalConsumables,
    method: 'post',
    data: params
  })
}

export default{
  listMedicalConsumables
}
