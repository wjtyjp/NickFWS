import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListLargeMedinsEquipment(params) {
  return request({
    url: APIUrl.equipmentStatistics.ListLargeMedinsEquipment,
    method: 'post',
    data: params
  })
}

export default{
  ListLargeMedinsEquipment
}
