import request from '@/utils/request'
import APIUrl from '@/api/apiUrl/statistical-analysis'

function ListIncomeData(params) {
  return request({
    url: APIUrl.expenditureStructureData.ListIncomeData,
    method: 'post',
    data: params
  })
}

export default{
  ListIncomeData
}
