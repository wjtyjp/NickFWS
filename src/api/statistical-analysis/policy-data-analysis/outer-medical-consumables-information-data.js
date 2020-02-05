import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function listOutsideItemConsumables(params) {
  return request({
    url: APIUrl.outerMedicalConsumablesInformationData.listOutsideItemConsumables,
    method: 'post',
    data: params
  })
}

export default{
  listOutsideItemConsumables
}
